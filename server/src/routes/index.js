const express = require('express');
const { sequelize } = require('../config/database');
const logger = require('../config/logger');
const { Province, Unit, Workshop, UnitImage } = require('../models');

const router = express.Router();

function mapProvincePayload(province) {
  return {
    id: province.id,
    name: province.name,
    slug: province.slug,
    mapKey: province.mapKey,
    fillColor: province.fillColor,
    hasDetail: province.hasDetail,
    displayOrder: province.displayOrder,
    units: province.units.map((unit) => ({
      id: unit.id,
      name: unit.name,
      code: unit.code,
      abbreviation: unit.abbreviation,
      description: unit.description,
      detailText: unit.detailText,
      displayOrder: unit.displayOrder,
      workshops: unit.workshops.map((workshop) => ({
        id: workshop.id,
        name: workshop.name,
        workersCount: workshop.workersCount,
        displayOrder: workshop.displayOrder,
      })),
      images: unit.images.map((image) => ({
        id: image.id,
        imageUrl: image.imageUrl,
        altText: image.altText,
        displayOrder: image.displayOrder,
      })),
    })),
  };
}

async function loadProvince(where) {
  return Province.findOne({
    where,
    include: [
      {
        model: Unit,
        as: 'units',
        include: [
          { model: Workshop, as: 'workshops' },
          { model: UnitImage, as: 'images' },
        ],
      },
    ],
    order: [
      ['displayOrder', 'ASC'],
      [{ model: Unit, as: 'units' }, 'displayOrder', 'ASC'],
      [{ model: Unit, as: 'units' }, { model: Workshop, as: 'workshops' }, 'displayOrder', 'ASC'],
      [{ model: Unit, as: 'units' }, { model: UnitImage, as: 'images' }, 'displayOrder', 'ASC'],
    ],
  });
}

router.get('/health', async (_req, res) => {
  try {
    await sequelize.authenticate();
    logger.info('Health check OK');
    res.json({ ok: true });
  } catch (error) {
    logger.error('Health check failed', { message: error.message, stack: error.stack });
    res.status(500).json({ ok: false, error: error.message });
  }
});

router.get('/map/provinces', async (_req, res) => {
  try {
    logger.info('Loading map provinces');

    const provinces = await Province.findAll({
      include: [
        {
          model: Unit,
          as: 'units',
          include: [
            { model: Workshop, as: 'workshops' },
            { model: UnitImage, as: 'images' },
          ],
        },
      ],
      order: [
        ['displayOrder', 'ASC'],
        [{ model: Unit, as: 'units' }, 'displayOrder', 'ASC'],
        [{ model: Unit, as: 'units' }, { model: Workshop, as: 'workshops' }, 'displayOrder', 'ASC'],
        [{ model: Unit, as: 'units' }, { model: UnitImage, as: 'images' }, 'displayOrder', 'ASC'],
      ],
    });

    logger.info('Map provinces loaded', {
      provincesCount: provinces.length,
      unitsCount: provinces.reduce((sum, province) => sum + province.units.length, 0),
    });

    res.json(provinces.map(mapProvincePayload));
  } catch (error) {
    logger.error('Failed to load map provinces', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ ok: false, error: error.message });
  }
});

router.get('/admin/provinces/:slug', async (req, res) => {
  try {
    logger.info('Loading admin province detail', { slug: req.params.slug });
    const province = await loadProvince({ slug: req.params.slug });

    if (!province) {
      logger.warn('Province not found for admin detail', { slug: req.params.slug });
      return res.status(404).json({ ok: false, error: 'Provincia no encontrada.' });
    }

    return res.json(mapProvincePayload(province));
  } catch (error) {
    logger.error('Failed to load admin province detail', {
      slug: req.params.slug,
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ ok: false, error: error.message });
  }
});

router.put('/admin/units/:unitId', async (req, res) => {
  try {
    logger.info('Updating unit', { unitId: req.params.unitId });
    const unit = await Unit.findByPk(req.params.unitId);

    if (!unit) {
      logger.warn('Unit not found for update', { unitId: req.params.unitId });
      return res.status(404).json({ ok: false, error: 'Unidad no encontrada.' });
    }

    const payload = {
      name: req.body.name?.trim() || unit.name,
      code: req.body.code?.trim() || null,
      abbreviation: req.body.abbreviation?.trim() || null,
      description: req.body.description?.trim() || null,
      detailText: req.body.detailText?.trim() || null,
    };

    await unit.update(payload);
    logger.info('Unit updated successfully', { unitId: unit.id });

    return res.json({
      ok: true,
      unit: {
        id: unit.id,
        name: unit.name,
        code: unit.code,
        abbreviation: unit.abbreviation,
        description: unit.description,
        detailText: unit.detailText,
      },
    });
  } catch (error) {
    logger.error('Failed to update unit', {
      unitId: req.params.unitId,
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ ok: false, error: error.message });
  }
});

router.post('/admin/units/:unitId/workshops', async (req, res) => {
  try {
    logger.info('Creating workshop', { unitId: req.params.unitId, body: req.body });
    const unit = await Unit.findByPk(req.params.unitId);

    if (!unit) {
      logger.warn('Unit not found for workshop creation', { unitId: req.params.unitId });
      return res.status(404).json({ ok: false, error: 'Unidad no encontrada.' });
    }

    const name = req.body.name?.trim();
    const workersCount = Number(req.body.workersCount);

    if (!name) {
      logger.warn('Workshop creation rejected: missing name', { unitId: req.params.unitId });
      return res.status(400).json({ ok: false, error: 'El nombre del taller es obligatorio.' });
    }

    if (!Number.isFinite(workersCount) || workersCount < 0) {
      logger.warn('Workshop creation rejected: invalid workersCount', {
        unitId: req.params.unitId,
        workersCount: req.body.workersCount,
      });
      return res.status(400).json({ ok: false, error: 'La cantidad de internos debe ser un número válido.' });
    }

    const maxOrder = (await Workshop.max('displayOrder', { where: { unitId: unit.id } })) || 0;
    const workshop = await Workshop.create({
      unitId: unit.id,
      name,
      workersCount,
      displayOrder: maxOrder + 1,
    });

    logger.info('Workshop created successfully', { workshopId: workshop.id, unitId: unit.id });

    return res.status(201).json({
      ok: true,
      workshop: {
        id: workshop.id,
        name: workshop.name,
        workersCount: workshop.workersCount,
        displayOrder: workshop.displayOrder,
      },
    });
  } catch (error) {
    logger.error('Failed to create workshop', {
      unitId: req.params.unitId,
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ ok: false, error: error.message });
  }
});

router.put('/admin/workshops/:workshopId', async (req, res) => {
  try {
    logger.info('Updating workshop', { workshopId: req.params.workshopId, body: req.body });
    const workshop = await Workshop.findByPk(req.params.workshopId);

    if (!workshop) {
      logger.warn('Workshop not found for update', { workshopId: req.params.workshopId });
      return res.status(404).json({ ok: false, error: 'Taller no encontrado.' });
    }

    const name = req.body.name?.trim();
    const workersCount = Number(req.body.workersCount);

    if (!name) {
      logger.warn('Workshop update rejected: missing name', { workshopId: req.params.workshopId });
      return res.status(400).json({ ok: false, error: 'El nombre del taller es obligatorio.' });
    }

    if (!Number.isFinite(workersCount) || workersCount < 0) {
      logger.warn('Workshop update rejected: invalid workersCount', {
        workshopId: req.params.workshopId,
        workersCount: req.body.workersCount,
      });
      return res.status(400).json({ ok: false, error: 'La cantidad de internos debe ser un número válido.' });
    }

    await workshop.update({ name, workersCount });
    logger.info('Workshop updated successfully', { workshopId: workshop.id });

    return res.json({
      ok: true,
      workshop: {
        id: workshop.id,
        name: workshop.name,
        workersCount: workshop.workersCount,
        displayOrder: workshop.displayOrder,
      },
    });
  } catch (error) {
    logger.error('Failed to update workshop', {
      workshopId: req.params.workshopId,
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ ok: false, error: error.message });
  }
});

router.delete('/admin/workshops/:workshopId', async (req, res) => {
  try {
    logger.info('Deleting workshop', { workshopId: req.params.workshopId });
    const workshop = await Workshop.findByPk(req.params.workshopId);

    if (!workshop) {
      logger.warn('Workshop not found for delete', { workshopId: req.params.workshopId });
      return res.status(404).json({ ok: false, error: 'Taller no encontrado.' });
    }

    await workshop.destroy();
    logger.info('Workshop deleted successfully', { workshopId: req.params.workshopId });
    return res.json({ ok: true });
  } catch (error) {
    logger.error('Failed to delete workshop', {
      workshopId: req.params.workshopId,
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ ok: false, error: error.message });
  }
});

module.exports = router;

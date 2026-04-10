'use strict';
const data = require('../seed-data.json');

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    const provinces = data.provinces.map((province) => ({
      name: province.name,
      slug: province.slug,
      map_key: province.componentName,
      fill_color: province.fillColor,
      has_detail: province.hasDetail,
      display_order: province.displayOrder,
      created_at: now,
      updated_at: now,
    }));

    await queryInterface.bulkInsert('provinces', provinces);

    const insertedProvinces = await queryInterface.sequelize.query(
      'SELECT id, slug FROM provinces;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const provinceIdBySlug = new Map(insertedProvinces.map((province) => [province.slug, province.id]));

    const units = [];
    const workshops = [];
    const unitImages = [];

    for (const province of data.provinces) {
      const provinceId = provinceIdBySlug.get(province.slug);
      for (const unit of province.units) {
        units.push({
          province_id: provinceId,
          name: unit.name,
          code: unit.code,
          abbreviation: unit.abbreviation || unit.code,
          description: null,
          detail_text: unit.detailText,
          display_order: unit.displayOrder,
          created_at: now,
          updated_at: now,
        });
      }
    }

    if (units.length) {
      await queryInterface.bulkInsert('units', units);
    }

    const insertedUnits = await queryInterface.sequelize.query(
      'SELECT id, province_id, name FROM units;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const unitIdByKey = new Map(
      insertedUnits.map((unit) => [`${unit.province_id}::${unit.name}`, unit.id])
    );

    for (const province of data.provinces) {
      const provinceId = provinceIdBySlug.get(province.slug);
      for (const unit of province.units) {
        const unitId = unitIdByKey.get(`${provinceId}::${unit.name}`);
        for (const workshop of unit.workshops) {
          workshops.push({
            unit_id: unitId,
            name: workshop.name,
            workers_count: workshop.workersCount,
            display_order: workshop.displayOrder,
            created_at: now,
            updated_at: now,
          });
        }
        for (const image of unit.images) {
          unitImages.push({
            unit_id: unitId,
            image_url: image.imageUrl,
            alt_text: image.altText,
            display_order: image.displayOrder,
            created_at: now,
            updated_at: now,
          });
        }
      }
    }

    if (workshops.length) {
      await queryInterface.bulkInsert('workshops', workshops);
    }

    if (unitImages.length) {
      await queryInterface.bulkInsert('unit_images', unitImages);
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('unit_images', null, {});
    await queryInterface.bulkDelete('workshops', null, {});
    await queryInterface.bulkDelete('units', null, {});
    await queryInterface.bulkDelete('provinces', null, {});
  },
};

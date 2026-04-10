'use strict';

function deriveAbbreviation(name) {
  if (!name) {
    return null;
  }

  const normalized = String(name).trim();

  if (/Ciudad Autónoma de Buenos Aires|DEVOTO/i.test(normalized)) {
    return 'CPFCABA';
  }

  if (/Jóvenes Adultos/i.test(normalized)) {
    return 'CFJA';
  }

  const unidadMatch = normalized.match(/\bUnidad\s+(\d+)\b/i);
  if (unidadMatch) {
    return `U${unidadMatch[1]}`;
  }

  const cpfRomanMatch = normalized.match(/\bComplejo Penitenciario Federal\s+([IVXLC]+)\b/i);
  if (cpfRomanMatch) {
    return `CPF${cpfRomanMatch[1].toUpperCase()}`;
  }

  const cpfNumberMatch = normalized.match(/\bComplejo Penitenciario Federal\s+(\d+)\b/i);
  if (cpfNumberMatch) {
    return `CPF${cpfNumberMatch[1]}`;
  }

  return null;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('units', 'abbreviation', {
      type: Sequelize.STRING(50),
      allowNull: true,
      after: 'code',
    });

    const units = await queryInterface.sequelize.query(
      'SELECT id, name, code FROM units;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    for (const unit of units) {
      const abbreviation = unit.code || deriveAbbreviation(unit.name);
      if (abbreviation) {
        await queryInterface.bulkUpdate(
          'units',
          { abbreviation },
          { id: unit.id }
        );
      }
    }
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('units', 'abbreviation');
  },
};

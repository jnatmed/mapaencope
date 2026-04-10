'use strict';

const KNOWN_ABBREVIATIONS = {
  'Complejo Penitenciario Federal I - Ezeiza': 'CPF1',
  'Complejo Penitenciario Federal II - Marcos Paz': 'CPF2',
  'Complejo Penitenciario Federal IV de Mujeres - Ezeiza': 'CPF4',
  'Complejo Penitenciario Federal VII de Mujeres - Ezeiza': 'CPFVII',
  'Unidad 19 - Colonia Penal de Ezeiza': 'U19',
  'Unidad 34 - Instituto Penal Federal de Campo de Mayo': 'U34',
  'Complejo Federal de Jóvenes Adultos - Marcos Paz': 'CFJA',
  'Complejo Federal de Jóvenes Adultos – Marcos Paz': 'CFJA',
  'Complejo Penitenciario Federal de la Ciudad Autónoma de Buenos Aires - DEVOTO': 'CPFCABA',
};

module.exports = {
  async up(queryInterface) {
    for (const [name, abbreviation] of Object.entries(KNOWN_ABBREVIATIONS)) {
      await queryInterface.bulkUpdate(
        'units',
        { abbreviation },
        { name }
      );
    }
  },

  async down(queryInterface) {
    for (const name of Object.keys(KNOWN_ABBREVIATIONS)) {
      await queryInterface.bulkUpdate(
        'units',
        { abbreviation: null },
        { name }
      );
    }
  },
};

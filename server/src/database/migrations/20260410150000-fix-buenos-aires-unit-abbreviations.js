'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      UPDATE units
      SET abbreviation = CASE
        WHEN name LIKE '%Complejo Penitenciario Federal I - Ezeiza%' THEN 'CPF1'
        WHEN name LIKE '%Complejo Penitenciario Federal II - Marcos Paz%' THEN 'CPF2'
        WHEN name LIKE '%Complejo Penitenciario Federal IV de Mujeres - Ezeiza%' THEN 'CPF4'
        WHEN name LIKE '%Complejo Penitenciario Federal VII de Mujeres - Ezeiza%' THEN 'CPFVII'
        WHEN name LIKE '%Unidad 19 - Colonia Penal de Ezeiza%' THEN 'U19'
        WHEN name LIKE '%Unidad 34 - Instituto Penal Federal de Campo de Mayo%' THEN 'U34'
        WHEN name LIKE '%Complejo Federal de Jóvenes Adultos%' THEN 'CFJA'
        WHEN name LIKE '%Ciudad Autónoma de Buenos Aires - DEVOTO%' THEN 'CPFCABA'
        ELSE abbreviation
      END
      WHERE name LIKE '%Ezeiza%'
        OR name LIKE '%Marcos Paz%'
        OR name LIKE '%Campo de Mayo%'
        OR name LIKE '%Jóvenes Adultos%'
        OR name LIKE '%Ciudad Autónoma de Buenos Aires - DEVOTO%';
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      UPDATE units
      SET abbreviation = CASE
        WHEN name LIKE '%Complejo Penitenciario Federal I - Ezeiza%' THEN 'CPFI'
        WHEN name LIKE '%Complejo Penitenciario Federal II - Marcos Paz%' THEN 'CPFII'
        WHEN name LIKE '%Complejo Penitenciario Federal IV de Mujeres - Ezeiza%' THEN 'CPFIV'
        WHEN name LIKE '%Complejo Penitenciario Federal VII de Mujeres - Ezeiza%' THEN 'CPFVII'
        WHEN name LIKE '%Unidad 19 - Colonia Penal de Ezeiza%' THEN 'U19'
        WHEN name LIKE '%Unidad 34 - Instituto Penal Federal de Campo de Mayo%' THEN 'U34'
        WHEN name LIKE '%Complejo Federal de Jóvenes Adultos%' THEN 'CFJA'
        WHEN name LIKE '%Ciudad Autónoma de Buenos Aires - DEVOTO%' THEN 'CPFCABA'
        ELSE abbreviation
      END
      WHERE name LIKE '%Ezeiza%'
        OR name LIKE '%Marcos Paz%'
        OR name LIKE '%Campo de Mayo%'
        OR name LIKE '%Jóvenes Adultos%'
        OR name LIKE '%Ciudad Autónoma de Buenos Aires - DEVOTO%';
    `);
  },
};

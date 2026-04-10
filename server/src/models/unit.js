const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'Unit',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'province_id',
      },
      name: {
        type: DataTypes.STRING(180),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      abbreviation: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      detailText: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'detail_text',
      },
      displayOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'display_order',
      },
    },
    {
      tableName: 'units',
      underscored: true,
    }
  );

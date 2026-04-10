const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'Workshop',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      unitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'unit_id',
      },
      name: {
        type: DataTypes.STRING(180),
        allowNull: false,
      },
      workersCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'workers_count',
      },
      displayOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'display_order',
      },
    },
    {
      tableName: 'workshops',
      underscored: true,
    }
  );

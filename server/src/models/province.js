const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'Province',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(140),
        allowNull: false,
        unique: true,
      },
      mapKey: {
        type: DataTypes.STRING(120),
        allowNull: true,
        field: 'map_key',
      },
      fillColor: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'fill_color',
      },
      hasDetail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'has_detail',
      },
      displayOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'display_order',
      },
    },
    {
      tableName: 'provinces',
      underscored: true,
    }
  );

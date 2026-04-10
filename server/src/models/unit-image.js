const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'UnitImage',
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
      imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'image_url',
      },
      altText: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'alt_text',
      },
      displayOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'display_order',
      },
    },
    {
      tableName: 'unit_images',
      underscored: true,
    }
  );

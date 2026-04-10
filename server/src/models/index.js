const { sequelize } = require('../config/database');
const ProvinceModel = require('./province');
const UnitModel = require('./unit');
const WorkshopModel = require('./workshop');
const UnitImageModel = require('./unit-image');

const Province = ProvinceModel(sequelize);
const Unit = UnitModel(sequelize);
const Workshop = WorkshopModel(sequelize);
const UnitImage = UnitImageModel(sequelize);

Province.hasMany(Unit, { foreignKey: 'province_id', as: 'units' });
Unit.belongsTo(Province, { foreignKey: 'province_id', as: 'province' });

Unit.hasMany(Workshop, { foreignKey: 'unit_id', as: 'workshops' });
Workshop.belongsTo(Unit, { foreignKey: 'unit_id', as: 'unit' });

Unit.hasMany(UnitImage, { foreignKey: 'unit_id', as: 'images' });
UnitImage.belongsTo(Unit, { foreignKey: 'unit_id', as: 'unit' });

module.exports = {
  sequelize,
  Province,
  Unit,
  Workshop,
  UnitImage,
};

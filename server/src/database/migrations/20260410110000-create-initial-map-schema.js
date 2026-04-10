'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('provinces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(120),
      },
      slug: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(140),
      },
      map_key: {
        allowNull: true,
        type: Sequelize.STRING(120),
      },
      fill_color: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      has_detail: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      display_order: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      province_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'provinces',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(180),
      },
      code: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      detail_text: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      display_order: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('workshops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unit_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'units',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(180),
      },
      workers_count: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      display_order: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('unit_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unit_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'units',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      image_url: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      alt_text: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      display_order: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('unit_images');
    await queryInterface.dropTable('workshops');
    await queryInterface.dropTable('units');
    await queryInterface.dropTable('provinces');
  },
};

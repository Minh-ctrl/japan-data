const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('population_number_prefectures', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    japanesename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "population_number_prefectures_japanesename_key"
    },
    englishname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "population_number_prefectures_englishname_key"
    },
    year1920: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1930: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1940: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1950: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1960: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1970: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1980: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1990: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year1995: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year2000: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year2005: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year2010: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'population_number_prefectures',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "population_number_prefectures_englishname_key",
        unique: true,
        fields: [
          { name: "englishname" },
        ]
      },
      {
        name: "population_number_prefectures_japanesename_key",
        unique: true,
        fields: [
          { name: "japanesename" },
        ]
      },
      {
        name: "population_number_prefectures_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

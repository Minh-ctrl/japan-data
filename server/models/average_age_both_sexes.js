const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return average_age_both_sexes.init(sequelize, DataTypes);
}

class average_age_both_sexes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    japanesename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "average_age_both_sexes_japanesename_key"
    },
    englishname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "average_age_both_sexes_englishname_key"
    },
    year1920: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1930: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1940: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1950: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1955: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1960: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1965: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1970: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1975: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1980: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1985: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1990: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year1995: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year2000: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year2005: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    year2010: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'average_age_both_sexes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "average_age_both_sexes_englishname_key",
        unique: true,
        fields: [
          { name: "englishname" },
        ]
      },
      {
        name: "average_age_both_sexes_japanesename_key",
        unique: true,
        fields: [
          { name: "japanesename" },
        ]
      },
      {
        name: "average_age_both_sexes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return industry_employment_population.init(sequelize, DataTypes);
}

class industry_employment_population extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    industry: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'industry_employment_population',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "industry_employment_population_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

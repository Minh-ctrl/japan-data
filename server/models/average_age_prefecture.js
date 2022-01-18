const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return average_age_prefecture.init(sequelize, DataTypes);
};

class average_age_prefecture extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        japanese_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        english_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        year: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        avg_population: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "average_age_prefecture",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "average_age_prefecture_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}

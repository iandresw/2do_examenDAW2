import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Producto = sequelize.define(
  "product",
  {
    partNumber: {
      type: DataTypes.STRING,
    },
    productType: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    family: {
      type: DataTypes.STRING,
    },
    line: {
      type: DataTypes.STRING,
    },
    productSegment: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.DECIMAL,
    },
    valueCurrency: {
      type: DataTypes.STRING,
    },
    defaultQuantityUnits: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    plannerCode: {
      type: DataTypes.STRING,
    },
    sourceLink: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "product",
    timestamps: false,
  }
);

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Empleado = sequelize.define(
  "employees",
  {
    EMPLOYEE_ID: {
      type: DataTypes.INTEGER,
    },
    FIRST_NAME: {
      type: DataTypes.STRING,
    },
    LAST_NAME: {
      type: DataTypes.STRING,
    },
    EMAIL: {
      type: DataTypes.STRING,
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING,
    },
    HIRE_DATE: {
      type: DataTypes.STRING,
    },
    JOB_ID: {
      type: DataTypes.STRING,
    },
    SALARY: {
      type: DataTypes.INTEGER,
    },
    COMMISSION_PCT: {
      type: DataTypes.STRING,
    },
    MANAGER_ID: {
      type: DataTypes.INTEGER,
    },
    DEPARTMENT_ID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "employees",
    timestamps: false,
  }
);

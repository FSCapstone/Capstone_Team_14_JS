const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Question = db.define(
  'question',
  {
    difficulty: {
      type: DataTypes.ENUM('easy', 'medium', 'hard'),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    testSpecs: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastUsed: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  { timestamps: false }
);

module.exports = Question;
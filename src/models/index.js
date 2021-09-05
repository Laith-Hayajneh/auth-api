'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const userModel = require('./users.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || "postgres://xtixozee:7rn1Oc4cpvt0CATPH8qvBYqYHd0rD5n4@chunee.db.elephantsql.com/xtixozee";

const DATABASE_CONFIG = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
};

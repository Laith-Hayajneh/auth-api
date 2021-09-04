'use strict';

const express = require('express');
const authRouter = express.Router();

const { users } = require('../models');
const basicAuth = require('../middleware/basic.js')
const bearerAuth = require('../middleware/bearer.js')
const permissions = require('../middleware/acl.js')

authRouter.post('/signup', async (req, res, next) => {
  console.log(req.body,'boooody')
  try {
    let userRecord = await req.body;
    console.log(userRecord,'reeeee55555555555555555e');
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
    // res.send("ssssss")
  } catch (e) {
    console.log('object22222222222')
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  console.log('reeeee55555555555555555e');

  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
  const userRecords = await users.findAll({});
  const list = userRecords.map(user => user.username);
  res.status(200).json(list);
}); 

authRouter.get('/secret',  async (req, res, next) => {
  res.status(200).send('Welcome to the secret area')
});

module.exports = authRouter;

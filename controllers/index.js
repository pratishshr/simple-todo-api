'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _todoController = require('./todoController');

var _todoController2 = _interopRequireDefault(_todoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/17/16.
 */

var router = _express2.default.Router();

// Controllers


router.get('/', function (req, res) {
  res.render('index', { title: 'node-express-starter' });
});

router.use('/todos', _todoController2.default);

exports.default = router;
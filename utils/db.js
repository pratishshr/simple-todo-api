'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _config = require('../config/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = (0, _knex2.default)(_config2.default.db); /**
                                                            * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
                                                            * on 8/19/16.
                                                            */

var db = (0, _bookshelf2.default)(connection);

exports.default = db;
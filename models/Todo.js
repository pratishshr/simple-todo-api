'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = _db2.default.Model.extend({
  tableName: 'todos'
}); /**
     * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
     * on 8/19/16.
     */

exports.default = Todo;
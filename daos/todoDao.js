'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAll = fetchAll;
exports.fetchById = fetchById;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _Todo = require('../models/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

function fetchAll() {
  return _Todo2.default.fetchAll();
}

function fetchById(id) {
  return _Todo2.default.forge({ id: id }).fetch();
}

function create(todo) {
  return _Todo2.default.forge({
    title: todo.title,
    description: todo.description,
    created_at: (0, _moment2.default)().format()
  }).save();
}

function update(todoId, todo) {
  return _Todo2.default.forge({
    id: todoId
  }).save({
    title: todo.title,
    description: todo.description,
    updated_at: (0, _moment2.default)().format()
  });
}

function destroy(todoId) {
  return _Todo2.default.forge({
    id: todoId
  }).destroy({ require: true });
}
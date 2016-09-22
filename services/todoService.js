'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAll = fetchAll;
exports.fetchById = fetchById;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _todoDao = require('../daos/todoDao');

var todoDao = _interopRequireWildcard(_todoDao);

var _validator = require('../utils/validator');

var validator = _interopRequireWildcard(_validator);

var _ValidationError = require('../errors/ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Utils
function fetchAll() {
  return todoDao.fetchAll();
}

// Custom Errors
/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/20/16.
 */

// Daos
function fetchById(id) {
  var validationErrors = validator.checkForInt({ id: id });
  if (!validationErrors.length) {
    return todoDao.fetchById(id);
  }
  throw new _ValidationError2.default({
    statusCode: 400,
    message: 'Supplied value(s) for ' + validationErrors.toString() + ' is not an integer'
  });
}

function create(todo) {
  var validationErrors = validator.checkForString({ title: todo.title });
  if (!validationErrors.length) {
    return todoDao.create(todo);
  }
  throw new _ValidationError2.default({
    statusCode: 400,
    message: validationErrors.toString() + ' should be a non-empty string'
  });
}

function update(todoId, todo) {
  var validationErrors = validator.checkForString({ title: todo.title });
  if (!validationErrors.length) {
    return todoDao.update(todoId, todo);
  }
  throw new _ValidationError2.default({
    statusCode: 400,
    message: validationErrors.toString() + ' should be a non-empty string'
  });
}

function destroy(todoId) {
  var validationErrors = validator.checkForInt({ id: todoId });
  if (!validationErrors.length) {
    return todoDao.destroy(todoId);
  }
  throw new _ValidationError2.default({
    statusCode: 400,
    message: validationErrors.toString() + ' should be an integer'
  });
}
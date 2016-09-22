'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForInt = checkForInt;
exports.checkForNull = checkForNull;
exports.checkForString = checkForString;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkForInt(params) {
  var errors = [];
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      if (!_validator2.default.isInt(params[key])) {
        errors.push(key);
      }
    }
  }
  return errors;
} /**
   * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
   * on 8/25/16.
   */

function checkForNull(params) {
  var errors = [];
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      if (params[key] === null || params[key].length === 0) {
        errors.push(key);
      }
    }
  }
  return errors;
}

function checkForString(params) {
  var errors = [];
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      if (typeof params[key] !== 'string') {
        errors.push(key);
      }
    }
  }
  return errors;
}
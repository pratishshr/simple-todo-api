'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorHandler;
/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/21/16.
 */

function errorHandler(err, req, res, next) {
  console.log(err);
  var statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      statusCode: statusCode,
      message: err.message || 'Internal server error'
    }
  });
}
/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/25/16.
 */

import validator from 'validator';

export function checkForInt(params) {
  let errors = [];
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      if (!validator.isInt(params[key])) {
        errors.push(key);
      }
    }
  }
  return errors;
}

export function checkForNull(params) {
  let errors = [];
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      if (params[key] === null || params[key].length === 0) {
        errors.push(key);
      }
    }
  }
  return errors;
}

export function checkForString(params) {
  let errors = [];
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      if (typeof params[key] !== 'string') {
        errors.push(key);
      }
    }
  }
  return errors;
}
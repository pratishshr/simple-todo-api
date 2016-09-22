'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _todoService = require('../services/todoService');

var todoService = _interopRequireWildcard(_todoService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/18/16.
 */

var router = _express2.default.Router();

/**
 * @Path('/todos');
 */

// Services
router.route('/').get(function (req, res, next) {
  todoService.fetchAll().then(function (response) {
    res.json({ data: response.toJSON() });
  });
}).post(function (req, res, next) {
  todoService.create(req.body).then(function (response) {
    res.json({ data: response.toJSON() });
  }).catch(function (err) {
    next(err);
  });
});

router.route('/:todoId').get(function (req, res, next) {
  try {
    todoService.fetchById(req.params.todoId).then(function (response) {
      if (response) {
        res.json({ data: response.toJSON() });
      } else {
        next({ statusCode: 404, message: 'Todo with the supplied ID does not exist.' });
      }
    }).catch(function (err) {
      next(err);
    });
  } catch (err) {
    next(err);
  }
}).put(function (req, res, next) {
  try {
    todoService.update(req.params.todoId, req.body).then(function (response) {
      res.json({ success: true, data: response.toJSON() });
    }).catch(function (err) {
      if (err.message === 'No Rows Updated') {
        next({ statusCode: 404, message: 'Todo with the supplied ID does not exist.' });
      } else {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
}).delete(function (req, res, next) {
  try {
    todoService.destroy(req.params.todoId).then(function (response) {
      res.json({ success: true });
    }).catch(function (err) {
      if (err.message === 'No Rows Deleted') {
        next({ statusCode: 404, message: 'Todo with the supplied ID does not exist' });
      }
    });
  } catch (err) {
    next(err);
  }
});

exports.default = router;
/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/18/16.
 */

import express from 'express';

// Services
import * as todoService from '../services/todoService';

let router = express.Router();

/**
 * @Path('/todos');
 */

router.route('/')
  .get((req, res, next) => {
    todoService.fetchAll().then((response) => {
      res.json({data: response.toJSON()});
    })
  })
  .post((req, res, next) => {
    todoService.create(req.body).then((response) => {
      res.json({data: response.toJSON()});
    }).catch((err) => {
      next(err);
    })
  });

router.route('/:todoId')
  .get((req, res, next) => {
    try {
      todoService.fetchById(req.params.todoId).then((response) => {
        if (response) {
          res.json({data: response.toJSON()});
        } else {
          next({statusCode: 404, message: 'Todo with the supplied ID does not exist.'});
        }
      }).catch((err) => {
        next(err);
      })
    } catch (err) {
      next(err);
    }
  })
  .put((req, res, next) => {
    try {
      todoService.update(req.params.todoId, req.body).then((response) => {
        res.json({success: true, data: response.toJSON()});
      }).catch((err) => {
        if (err.message === 'No Rows Updated') {
          next({statusCode: 404, message: 'Todo with the supplied ID does not exist.'})
        } else {
          next(err);
        }
      });
    } catch (err) {
      next(err);
    }
  })
  .delete((req, res, next) => {
    try {
      todoService.destroy(req.params.todoId).then((response) => {
          res.json({success: true});
      }).catch((err) => {
        if (err.message === 'No Rows Deleted') {
          next({statusCode: 404, message: 'Todo with the supplied ID does not exist'});
        }
      });
    } catch (err) {
      next(err);
    }
  });

export default router;

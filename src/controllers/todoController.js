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
    todoService.add(req.body).then((response) => {
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
          next({errorCode: 404, message: 'Todo with the supplied ID does not exist.'});
        }
      }).catch((err) => {
        next(err);
      })
    } catch (err) {
      next(err);
    }
  });

export default router;

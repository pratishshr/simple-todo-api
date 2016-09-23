/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/18/16.
 */

import express from 'express';

import * as todoService from '../services/todoService';

import camelize from 'camelize';

let router = express.Router();

/**
 * @Path('/todos');
 */

router.get('/', (req, res, next) => {
  let page = parseInt(req.query.page);
  let pageSize = parseInt(req.query.page_size);
  todoService.fetchPage(page, pageSize).then((response) => {
    todoService.fetchCount().then((count) => {
      res.json({
        count: parseInt(count),
        page: page || 1,
        pageSize: pageSize || 10,
        data: camelize(response.toJSON())
      });
    })
  }).catch((err) => {
    next(err);
  })
});

router.post('/', (req, res, next) => {
  todoService.create(req.body).then((response) => {
    res.json({data: camelize(response.toJSON())});
  }).catch((err) => {
    next(err);
  })
});

router.get('/:todoId', (req, res, next) => {
  todoService.fetchById(req.params.todoId).then((response) => {
    if (response) {
      res.json({data: camelize(response.toJSON())});
    } else {
      next({statusCode: 404, message: 'Todo with the supplied ID does not exist.'});
    }
  }).catch((err) => {
    next(err);
  });
});

router.put('/:todoId', (req, res, next) => {
  todoService.update(req.params.todoId, req.body).then((response) => {
    res.json({success: true, data: camelize(response.toJSON())});
  }).catch((err) => {
    if (err.message === 'No Rows Updated') {
      next({statusCode: 404, message: 'Todo with the supplied ID does not exist.'})
    } else {
      next(err);
    }
  });
});

router.delete('/:todoId', (req, res, next) => {
  todoService.destroy(req.params.todoId).then((response) => {
    res.json({success: true});
  }).catch((err) => {
    if (err.message === 'No Rows Deleted') {
      next({statusCode: 404, message: 'Todo with the supplied ID does not exist'});
    }
  });
});

export default router;

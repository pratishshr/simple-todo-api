/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/17/16.
 */

import express from 'express';

// Controllers
import todoController from './todoController';

let router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'node-express-starter'});
});

router.use('/todos', todoController);

export default router;

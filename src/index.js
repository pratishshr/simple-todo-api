/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/16/16.
 */

import express from 'express';

// Controllers
import controllers from './controllers';

// Middlewares
import bodyParser from 'body-parser';

// Custom middlewares
import errorHandler from './middlewares/errorHandler';
import resourceNotFoundHandler from './middlewares/resourceNotFoundHandler';

const app = express();

// Configuration
app.set('port', process.env.PORT || '4444');
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(controllers);

// 500 Internal Server Error
app.use(errorHandler);

// 404 Not Found
app.use(resourceNotFoundHandler);

app.listen(app.get('port'), () => {
  console.log('Server started at http://localhost:' + app.get('port'));
});
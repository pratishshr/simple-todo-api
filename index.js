'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _resourceNotFoundHandler = require('./middlewares/resourceNotFoundHandler');

var _resourceNotFoundHandler2 = _interopRequireDefault(_resourceNotFoundHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Custom middlewares


// Controllers
var app = (0, _express2.default)();

// Configuration


// Middlewares
/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/16/16.
 */

app.set('port', process.env.PORT || '4444');
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(_bodyParser2.default.json());

app.use(_controllers2.default);

// 500 Internal Server Error
app.use(_errorHandler2.default);

// 404 Not Found
app.use(_resourceNotFoundHandler2.default);

app.listen(app.get('port'), function () {
  console.log('Server started at http://localhost:' + app.get('port'));
});
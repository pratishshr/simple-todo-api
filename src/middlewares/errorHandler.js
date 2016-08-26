/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/21/16.
 */

export default function errorHandler(err, req, res, next) {
  console.log(err);
  let statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      statusCode: statusCode,
      message: err.message || 'Internal server error'
    }
  });
}




/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/21/16.
 */

export default function errorHandler(err, req, res, next) {
  console.log(err);
  let errorCode = err.errorCode || 500;
  res.status(errorCode).json({
    error: {
      errorCode: errorCode,
      message: err.message || 'Internal server error'
    }
  });
}




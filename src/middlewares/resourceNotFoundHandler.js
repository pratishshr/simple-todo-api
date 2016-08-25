/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/25/16.
 */

export default function resourceNotFoundHandler(req, res, next) {
  res.status(404).json({
    error: {
      errorCode: 404,
      message: '404 - Not Found'
    }
  });
}
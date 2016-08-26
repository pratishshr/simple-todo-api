/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/26/16.
 */

class ValidationError extends Error{
  constructor(error) {
    super();
    this.name = 'ValidationError';
    this.statusCode = error.statusCode;
    this.message = error.message;
  }
}

export default ValidationError;
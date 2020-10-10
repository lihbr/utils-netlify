const statuses = require("statuses");

class HttpError extends Error {
  constructor(status = 500) {
    super(statuses(status));
    this.status = status;
  }
}

module.exports = HttpError;

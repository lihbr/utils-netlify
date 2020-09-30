const HttpError = require("../HttpError");
const {
  formatted: { error }
} = require("../response");

const route = (event, context, callback, controller) => {
  (async () => {
    if (controller[event.httpMethod]) {
      try {
        return await controller[event.httpMethod](event, context);
      } catch (err) {
        if (err instanceof HttpError) {
          return error({ status: err.status });
        } else {
          return error();
        }
      }
    } else {
      return error({ status: 405 });
    }
  })().then(result => callback(null, result));
};

module.exports = route;

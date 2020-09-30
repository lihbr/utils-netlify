const HttpError = require("../HttpError");

const memoryCache = {};

const throttle = (event, namespace = "default", timeout = 60) => {
  if (!event.headers || !event.headers["client-ip"]) {
    throw new HttpError(400);
  } else {
    const ip = event.headers["client-ip"];
    const now = Date.now();

    if (!memoryCache[namespace]) {
      memoryCache[namespace] = {};
    }

    if (
      memoryCache[namespace][ip] &&
      memoryCache[namespace][ip] > now - timeout * 1000
    ) {
      throw new HttpError(429);
    } else {
      memoryCache[namespace][ip] = now;
    }
  }
};

/**
 * Export
 */
module.exports = throttle;

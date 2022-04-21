const HttpError = require("../HttpError");

const memoryCache = {};

const throttle = (event, namespace = "default", timeout = 60) => {
  const ip = (event.headers
    ? event.headers["x-forwarded-for"] ||
      event.headers["x-nf-client-connection-ip"] ||
      event.headers["client-ip"]
    : ""
  ).split(", ")[0];

  if (!ip) {
    throw new HttpError(400);
  } else {
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

const { plain } = require("./raw");

/**
 * Just send an HTTP status code
 * @param {Number} status - response status
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const empty = ({ status = 200, headers } = {}) => {
  return plain({ status, headers });
};

/**
 * Redirect client
 * 301 = permanent, 302 = temporary
 * @param {Number} status - redirect status
 * @param {String} href - redirect location
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const redirect = ({ status = 302, href, headers } = {}) => {
  return plain({
    status,
    headers: {
      location: href,
      ...headers
    }
  });
};

module.exports = {
  empty,
  redirect
};

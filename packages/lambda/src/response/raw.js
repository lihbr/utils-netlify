/**
 * Send a plain response
 * @param {Number} status - response status
 * @param {String} body - response body
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const plain = ({ status = 200, body = "", headers = {} } = {}) => {
  return { statusCode: status, body, headers };
};

/**
 * Send an html response
 * @param {Number} status - response status
 * @param {String} body - response body
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const html = ({ status = 200, body = "", headers = {} } = {}) => {
  headers["content-type"] = "text/html; charset=UTF-8";
  return plain({ status, body, headers });
};

/**
 * Send a json response
 * @param {Number} status - response status
 * @param {String} body - response body
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const json = ({ status = 200, body = {}, headers = {} } = {}) => {
  headers["content-type"] = "application/json";
  return plain({ status, body: JSON.stringify(body), headers });
};

module.exports = {
  plain,
  html,
  json
};

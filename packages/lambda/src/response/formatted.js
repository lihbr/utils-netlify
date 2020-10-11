const statuses = require("statuses");
const { json } = require("./raw");

/**
 * Send a Google style formatted JSON response
 * @param {Number} status - response status
 * @param {String} msg - response message
 * @param {Object} data - response body data if success
 * @param {Object} error - response body error if error
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const base = ({
  status,
  msg = "",
  data = {},
  error = {},
  headers = {}
} = {}) => {
  if (!msg) {
    try {
      msg = statuses(status);
    } catch (err) {
      msg = "unknown";
    }
  }

  const body = { status, msg: msg.replace(/\.$/, "").toLowerCase() };

  if (status - (status % 100) < 400) {
    body.data = data;
  } else {
    body.error = error;
  }

  return json({ status, body, headers });
};

/**
 * Send a Google style formatted JSON success response
 * @param {Number} status - response status
 * @param {String} msg - response message
 * @param {Object} data - response body data if success
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const success = ({ status = 200, msg, data, headers } = {}) => {
  return base({ status, msg, data, headers });
};

/**
 * Send a Google style formatted JSON error response
 * @param {Number} status - response status
 * @param {String} msg - response message
 * @param {Object} error - response body error if error
 * @param {Object} headers - response headers
 * @return {Object} - response object
 */
const error = ({ status = 500, msg, error, headers } = {}) => {
  return base({ status, msg, error, headers });
};

module.exports = {
  base,
  success,
  error
};

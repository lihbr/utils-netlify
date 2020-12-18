/**
 * Check for Netlify
 * @return {Boolean} - true if on Netlify
 */
const isNetlify = () => process.env.NETLIFY;

module.exports = isNetlify;

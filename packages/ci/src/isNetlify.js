/**
 * Check for Netlify
 * @return {Boolean} - true if is Netlify
 */
const isNetlify = () => process.env.NETLIFY;

module.exports = isNetlify;

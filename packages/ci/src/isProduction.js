/**
 * Check for production
 * @return {Boolean} - true if on production
 */
const isProduction = () => process.env.CONTEXT === "production";

module.exports = isProduction;

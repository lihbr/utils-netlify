/**
 * Resolve Netlify final deploy URL
 * @param {Array} branchDomains - branches having their own domains
 * @return {String} - final deploy URL
 */
const getFinalDeployUrl = ({ branchDomains = [] }) => {
  switch (process.env.CONTEXT) {
    // Production gets production URL
    case "production":
      return process.env.URL;

    // Branch deploys having dedicated domains get their dedicated domains
    case "branch-deploy":
      if (branchDomains.includes(process.env.BRANCH)) {
        return process.env.URL.replace(
          /^(https?:\/\/)/,
          `$1${process.env.BRANCH.toLowerCase()}.`
        );
      }

    // Everything else gets prime URL
    default:
      process.env.APP_URL = process.env.DEPLOY_PRIME_URL;
      break;
  }
};

module.exports = getFinalDeployUrl;

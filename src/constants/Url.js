/**
 * Enum for URLs for the API endpoints.
 */

const domain = 'https://api.vultr.com';
let baseUrl = '/v1';
if (process.env.NODE_ENV === 'production') {
  baseUrl = domain + baseUrl;
}

if (baseUrl[baseUrl.length - 1] === '/') {
  baseUrl = baseUrl.slice(0, -1);
}

export const AccountUrl = {
  AUTH_INFO: `${baseUrl}/auth/info`,
  ACCOUNT_INFO: `${baseUrl}/account/info`,
};

export const ResearchUrl = {
  RESEARCH: `${baseUrl}/document/research`,
};

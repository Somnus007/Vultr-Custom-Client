/**
 * Enum for URLs for the API endpoints.
 */

// const { API_BASE_URL } = process.env.customEnvs;
// const baseUrl = 'https://api.xtract-service.com';
// const baseUrl = 'http://10.0.0.146:8080';
// const baseUrl = 'https://api.develop.phac.xtract-service.com';
let baseUrl = '/v1';

if (baseUrl[baseUrl.length - 1] === '/') {
  baseUrl = baseUrl.slice(0, -1);
}

export const AccountUrl = {
  AUTH_INFO: `${baseUrl}/auth/info`,
  ACCOUNT_INFO: `${baseUrl}/account/info`,
};

export const ResearchUrl = {
  RESEARCH: `${baseUrl}/document-summaries/research`,
  RESEARCH_COUNT: `${baseUrl}/document-summaries/research/count`,
  EXPORT_CSV: `${baseUrl}/document-summaries/research`,
  SINGLE_SUMMARY: id => `${baseUrl}/document-summaries/${id}`,
};

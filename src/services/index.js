import axios from 'axios';
import redux from '../redux';
import { AccountType, CommonType } from '../constants/ActionTypes';

const defaultOptions = () => ({
  headers: {
    Authorization: `Bearer faketoken`,
  },
  timeout: 0,
});

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { store } = redux;
    const { response } = error;
    const status = response ? response.status : -1;
    switch (true) {
      case status === 401:
        if (window.location.href.indexOf('/login') === -1) {
          store.dispatch({
            type: AccountType.LOGOUT,
          });
          store.dispatch({
            type: CommonType.SET_COMMON_STATE,
            payload: { httpErrorStatus: status },
          });
        }
        break;
      case status === 403:
        if (window.location.href.indexOf('/login') === -1) {
          // this action should remove those expired login data
          store.dispatch({
            type: AccountType.LOGOUT,
          });
          store.dispatch({
            type: CommonType.SET_COMMON_STATE,
            payload: { httpErrorStatus: status },
          });
        }
        break;
      case status === 404:
        console.log('The API does not exist, please contact the developers'); //eslint-disable-line
        break;
      case status === 500 || status === 502 || status === 503:
        store.dispatch({
          type: CommonType.SET_COMMON_STATE,
          payload: { httpErrorStatus: status },
        });
        break;
      default:
        console.error(response); //eslint-disable-line
    }
    return Promise.reject(error);
  }
);

const request = (url, options = {}) =>
  new Promise((resolve, reject) => {
    const params = { ...options, url };
    axios(params)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      })
      .finally(res => {
        resolve(res);
      });
  });

const service = {
  /**
   * GET request
   */
  get: (url, params) =>
    request(url, {
      ...defaultOptions(),
      method: 'get',
      params,
    }),

  /**
   * POST request
   */
  post: (url, data) =>
    request(url, {
      ...defaultOptions(),
      method: 'post',
      data,
    }),

  /**
   * PUT request
   */
  put: (url, data) =>
    request(url, {
      ...defaultOptions(),
      method: 'put',
      data,
    }),

  /**
   * DELETE request
   */
  delete: (url, params) =>
    request(url, {
      ...defaultOptions(),
      method: 'delete',
      params,
    }),

  /**
   * Call request method using the given options
   */
  fetch: (url, options) =>
    request(url, {
      ...defaultOptions(),
      ...options,
    }),
};

export default service;

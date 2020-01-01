import qs from 'qs';

export const parseQueries = queries => {
  // queries is something like: '?a=1&b=2&name=allen'
  if (!queries) {
    return null;
  }
  return qs.parse(queries.split('?')[1]);
};

export const pattern = {
  // eslint-disable-next-line
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  // eslint-disable-next-line
  url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
  required: /\S/,
};

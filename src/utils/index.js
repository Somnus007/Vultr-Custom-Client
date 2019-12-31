import qs from 'qs';

export const parseQueries = queries => {
  // queries is something like: '?a=1&b=2&name=allen'
  if (!queries) {
    return null;
  }
  return qs.parse(queries.split('?')[1]);
};

export const test = () => {};

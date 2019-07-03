function parseQueryString(queryString) {
  return queryString
    .split('&')
    .map((q) => {
      const [key, value] = q.split('=');

      return { key, value };
    });
}

export default parseQueryString;

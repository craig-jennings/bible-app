function parseQueryString(queryString) {
  return queryString
    .slice(1)
    .split('&')
    .map((q) => {
      const [key, value] = q.split('=');

      return { key, value };
    });
}

export default parseQueryString;

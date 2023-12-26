const getSearchURL = (key) => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(key);
};

export { getSearchURL };

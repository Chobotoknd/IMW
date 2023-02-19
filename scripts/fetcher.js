function fetcher(resource) {
  return fetch(`http://127.0.0.1:5500/fixtures/${resource}.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error.message);
    });
}

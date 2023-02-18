function fetcher(resource) {
  return fetch(`http://localhost:3000/fixtures/${resource}.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error.message);
    });
}

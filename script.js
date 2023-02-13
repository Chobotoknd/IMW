const greeting = document.getElementsByClassName("greeting")[0];
const header = greeting.getElementsByTagName("h1")[0];
const description = greeting.getElementsByTagName("h2")[0];
const result = fetch("./greeting.json");
result
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        header.innerHTML = data.header;
        description.innerHTML = data.description;
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });
       
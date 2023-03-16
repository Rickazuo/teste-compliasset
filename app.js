const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const button = document.getElementById("btn-submit"); 
const form = document.getElementById("form");


function addUser(data) {
  fetch("http://localhost:3001/user", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => 
      response.json())
    .then((json) => console.log(json))
    .catch((e) => console.log(e))
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
  let data = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value
  };

  addUser(data);
});
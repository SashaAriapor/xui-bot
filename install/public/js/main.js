import { linear_gradient_generator } from "./function.js";


document.querySelector("body").style.background = linear_gradient_generator();


const submit_button = document.getElementById("submit_button");


submit_button.addEventListener("click", sendData);  


function sendData(event) {
    event.preventDefault();
    const bot_name = document.getElementById("bot_name").value;
    const bot_token = document.getElementById("bot_token").value;
    const admin_id = document.getElementById("admin_id").value;
  
    axios.post('/setup', { bot_name, bot_token, admin_id })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
}
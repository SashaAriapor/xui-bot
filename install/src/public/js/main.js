import { linear_gradient_generator } from "./function.js";


document.querySelector("body").style.background = linear_gradient_generator();


const submit_button = document.getElementById("submit_button");


submit_button.addEventListener("click", sendData);  


function sendData(event) {

    // dont refresh page
    event.preventDefault();

    // get data as dom 
    const bot_name = document.getElementById("bot_name").value;
    const bot_token = document.getElementById("bot_token").value;
    const admin_id = document.getElementById("admin_id").value;
  
    // send data to server 
    axios.post('/setup', { bot_name, bot_token, admin_id })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        const error_msg = error.response.data.errors[0];
        const error_element = document.getElementById("error_message");
        const error_container = document.getElementById("error_container");
        // show error in dom
        error_element.innerHTML = error_msg;
        error_container.style.display = "flex";
        // delete error tag from dom after 2s
        setTimeout(() => {
        error_container.style.display = "none";
        }, 2000);
      });
    }



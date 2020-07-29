var message = document.querySelector("textarea");
var body = document.querySelector("#main_welcome");

function SendMessage() {
  if (message.value) {

    var newDiv = document.createElement("div");
    var newMessage = document.createElement("p");

    var rm = message.value;
    newMessage.innerHTML = rm;

    body.appendChild(newDiv);
    newDiv.appendChild(newMessage);
    newDiv.className = 'messenger_main_sent';

    body.scrollTop = body.scrollHeight;
    message.value = "";

    setTimeout(function(){
    var responseDiv = document.createElement("div");
    var responseMessage = document.createElement("p");

    responseMessage.innerHTML = "Tu veux déjà rentrer chez toi ? Heureusement, One Point est bien desservi !";

    body.appendChild(responseDiv);
    responseDiv.appendChild(responseMessage);

    responseDiv.className = 'messenger_main_recieved';
    }, 1000);

    setTimeout(function(){
    var responseDiv = document.createElement("div");
    var responseMessage = document.createElement("p");

    responseMessage.innerHTML = "Tu as les stations Rue de la Pompe et Trocadéro à proximité ! Je t'envoie une carte tout de suite ;) ";

    body.appendChild(responseDiv);
    responseDiv.appendChild(responseMessage);

    responseDiv.className = 'messenger_main_recieved';
  }, 2000);

  setTimeout(function(){
  var responseDiv = document.createElement("div");

  responseDiv.innerHTML = '    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6594124363587!2d2.2805498158568747!3d48.8647047082158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67aed7b521af1%3A0xcca798aeb9c846a6!2sonepoint!5e0!3m2!1sfr!2sfr!4v1545041780805" width="500" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>';

  body.appendChild(responseDiv);

  responseDiv.className = 'messenger_main_recieved';
}, 3000);

  }
}

var envoyer = document.querySelector(".submit");
envoyer.addEventListener("click", SendMessage);

message.onkeyup = function(e) {
    var key = e.which;

    if (key === 13)
    {
        SendMessage();
    }
};

// first lert for the email input 
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter an email")
        
    }else if (document.querySelector('#newtask2 input').value.length == 0){
        alert("Please Enter an pass")
}
}
// secound condition
document.querySelector('#btn-push').onclick = function(){
  if(document.querySelector('#form input').value.length == 0){
      alert("Please Enter an email")
  }
}
 // email alerts
function checkEmail() {
    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    }
                }
                function save()
{
  // local storage
var name=document.getElementById("email").value;
var email = document.getElementById("Password").value;
  
  localStorage.setItem("localemail", name);
  localStorage.setItem("localpass", email);
  }


//cookie consent
jQuery(document).ready(function($) {
    //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
    if( getCookie('popupCookie') != 'submited'){ 
      if(getCookie('popupCookie') != 'closed' ){
        $('.popup-overlay').css("display", "block").hide().fadeIn();
      }
    }
    
    $('a.close').click(function(){
      $('.popup-overlay').fadeOut();
      //sets the coookie to one minute if the popup is closed (whole numbers = days)
      setCookie( 'popupCookie', 'closed', .00069444444 );
    });
    
    $('a.submit').click(function(){
      $('.popup-overlay').fadeOut();
      //sets the coookie to five minutes if the popup is submited (whole numbers = days)
      setCookie( 'popupCookie', 'submited', .0034722222 );
    });
  
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  });

/**react chatbot  */
var running = false;
function send() {
  if (running == true) return;
  var msg = document.getElementById("message").value;
  if (msg == "") return;
  running = true;
  addMsg(msg);
  window.setTimeout(addResponseMsg, 1000, msg);
}
function addMsg(msg) {
  var div = document.createElement("div");
  div.innerHTML =
    "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
    msg +
    "</div>";
  div.className = "chat-message-div";
  document.getElementById("message-box").appendChild(div);


  //SEND MESSAGE TO API
  document.getElementById("message").value = "";
  document.getElementById("message-box").scrollTop = document.getElementById(
    "message-box"
  ).scrollHeight;
}
function addResponseMsg(msg) {
  var div = document.createElement("div");
  div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
  div.className = "chat-message-div";
  document.getElementById("message-box").appendChild(div);
  document.getElementById("message-box").scrollTop = document.getElementById(
    "message-box"
  ).scrollHeight;
  running = false;
}
document.getElementById("message").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    send();
  }
});
  document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsedd")) {
      document.getElementById("chatbot").classList.remove("collapsedd")
      document.getElementById("chatbot_toggle").children[0].style.display = "none"
      document.getElementById("chatbot_toggle").children[1].style.display = ""
      setTimeout(addResponseMsg,1000,"Hi")
    }
    else {
      document.getElementById("chatbot").classList.add("collapsedd")
      document.getElementById("chatbot_toggle").children[0].style.display = ""
      document.getElementById("chatbot_toggle").children[1].style.display = "none"
    }
  }
/**price cards */
function check() {
  var checkBox = document.getElementById("checbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else if (checkBox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}
check();

// start now button alert
function myAlert() {
  Swal.fire('pleas sign up first')
}
// mail alert

function myBtn() {
  Swal.fire('pleas sign up first')
}
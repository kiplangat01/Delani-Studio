$(document).ready(function(){

  

$(".what2").click(function(){
  $("#hide2").slideToggle()
  $("#show2").slideToggle()
})

$(".what3").click(function(){
    $("#hide3").slideToggle()
    $("#show3").slideToggle()
  })

  $(".what4").click(function(){
    $("#hide4").slideToggle()
    $("#show4").slideToggle()
  })
  
  

  $("#submit").click(function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    let verfiedEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailVerifiedResult = verfiedEmail.test(email)

    if(name ==  "" || email == "" || message == ""){
      alert("enter your name emil and a message")
    } 
    else if(!emailVerifiedResult){
      alert("invalid email")
    }
    else {
     alert(name + " " + "we have received your message. Thank you for reaching out to us.")
    }
  })

  $(".overlay").hide()
  $(".box").hover(function(){
    $(this).find(".overlay").toggle(600)
  });


})
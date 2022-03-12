$(document).ready(function(){

  $(".para1").hide()
  $(".project").hover(function(){
    $(this).find(".para1").toggle(1000)
  });


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

    if(name == ""){
      alert("enter your name")
    } 
    else if(email == ""){
      alert("enter your email")
    }
    else if(message == ""){
      alert("write a message")
    }
    else {
     alert(name + " " + "we have received your message. Thank you for reaching out to us.")
    }
  })

 

})
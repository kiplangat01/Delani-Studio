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
  

  $(".overlay").hide()
  $(".box").hover(function(){
    $(this).find(".overlay").toggle(600)
  });


})


var form = document.getElementById("form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      var name = document.getElementById("name").value;
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert(name + " " + "we have received your message. Thank you for reaching out to us.")
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
$(document).ready(function() { //INICIO DOCUMENT READY

  $("form").submit(function (e) { 
    e.preventDefault();
    console.log("Tiro Ajax");
    console.log($("#correo").val());
    $.ajax({
          type: "POST",
          url: "http://localhost:3000/enviarCorreo",
          contentType : 'application/json',
          data: JSON.stringify(
                              { 
                                  "correo": $("#correo").val(), 
                                  "mensaje" : $("#mensaje").val()
                              }
                              ),
      success: function (response) {
        console.log("email enviado");
      }
    });
});


}); // FIN DOCUMENT READY

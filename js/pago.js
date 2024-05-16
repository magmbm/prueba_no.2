function alerta_pago(){
    alert("Pago realizado con exito");
}
let regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
let email;
let pnombre;
let snombre;
let paterno;
let materno;
let empty_msg= "No puede dejar este campo vacio";



$(document).ready(function(){
    $("#emailSmall").css("visibility", "hidden");
    $("#primerSmall").css("visibility", "hidden");
    $("paternoSmall").css("visibility", "hidden");
    $("maternoSmall").css("visibility", "hidden");



});


$("#emailInput").on("focusout", function(){
    email= $("#emailInput").val();
    if(email== "" || email == " "){
        $("#emailInput").css("border-color", "red");
    }else if(regex.test(email)){
        $("#emailInput").css("border-color", "red");
        $("#emailSmall").text("Ingrese un email valido") ;
        $("#emailSmall").toggle();
    }else{
        $("#emailSmall").toggle();
        $("#emailInput").css("border-color", "#63E400");
    }
});

//Revisar
$("#p_nombre").on("focusout", function(){
    pnombre= $("#p_nombre").val();
    if(pnombre== "" || pnombre == " "){
        $("#p_nombre").css("border-color", "red");
        $("#primerSmall").text(empty_msg);
        $("#primerSmall").toggle();
    }else{
        $("#primerSmall").toggle();
        $("#p_nombre").css("border-color", "#63E400");
    }
})

$("#paternoInput").on("focusout", function(){
    paterno= $("#paternoInput").val();
    if(paterno== "" || paterno == " "){
        $("#paternoInput").css("border-color", "red");
        $("#paternoSmall").text( empty_msg);
        $("#paternoSmall").toggle();
    }else{
        $("#paternoSmall").toggle();
        $("#paternoInput").css("border-color", "#63E400");
    }
})

$("#maternoInput").on("focusout", function(){
    materno= $("#maternoInput").val();
    if(materno== "" || materno == " "){
        $("#maternoInput").css("border-color", "red");
        $("#maternoSmall").text(empty_msg);
        $("#maternoSmall").toggle();
    }else{
        $("#maternoSmall").toggle();
        $("#maternoInput").css("border-color", "#63E400");
    }

})

$("#form-boton").on("click", function(){
    console.log(email);
    email= $("#emailInput").val();
    materno= $("#maternoInput").val();
    paterno= $("#paternoInput").val();
    pnombre= $("#p_nombre").val();
    snombre= $("#s_nombre").val();
    console.log(email);

    if(email== "" || email == " "){
        $("#emailInput").css("border-color", "red");
        $("#emailSmall").text(empty_msg);
        $("#emailSmall").toggle();
    }if(regex.test(email)){
    $("#emailInput").css("border-color", "red");
    $("#emailSmall").text( "Ingrese un email valido");
    $("#emailSmall").toggle();
    }if(materno== "" || materno== " "){
        $("#maternoInput").css("border-color", "red");
        $("#maternoSmall").text( empty_msg);
        $("#maternoSmall").toggle();
    }
    if(paterno== "" || paterno== " "){
        $("#paternoInput").css("border-color", "red");
        $("#paternoSmall").text( empty_msg);
        $("#paternoSmall").toggle();
    }
    if(pnombre== "" || pnombre==" "){
        $("#p_nombre").css("border-color", "red");
        $("#primerSmall").text( empty_msg);
        $("#primerSmall").toggle();
    }else{
        alert("Pago realizado con exito");
    }
});
const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let email;
let pnombre;
let snombre;
let paterno;
let materno;
let empty_msg= "No puede dejar este campo vacio";


if(regex.test("pedro@yahoo.cl")){
    console.log("Reg ex sirve");
}else{
    console.log("Reg ex NO sirve");
};

$(document).ready(function(){
    $("#emailSmall").css("visibility", "hidden");
    $("#primerSmall").css("visibility", "hidden");
    $("paternoSmall").css("visibility", "hidden");
    $("maternoSmall").css("visibility", "hidden");



});


$("#emailInput").on("focusout", function(){
    email= $("#emailInput").val();
    console.log("Nuevo " + email);
    if(email== "" || email == " "){
        $("#emailInput").css("border-color", "red");
        $("#emailSmall").text(empty_msg);
        $("#emailSmall").css("visibility", "visible");
        console.log("1");
    }else if(!regex.test(email)){
        console.log("2 ");
        $("#emailInput").css("border-color", "red");
        $("#emailSmall").text("Ingrese un email valido") ;
        $("#emailSmall").css("visibility", "visible");
    }else{
        console.log("3");
        $("#emailSmall").css("visibility", "hidden");
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
    console.log(paterno + " paterno");
    if(paterno== "" || paterno == " "){
        $("#paternoInput").css("border-color", "red");
        $("#paternoSmall").text(empty_msg);
        $("#paternoSmall").css("visibilty", "visible");
    }else{
        $("#paternoInput").css("border-color", "#63E400");
        $("#paternoSmall").css("visibilty", "hidden");
    }
})

$("#maternoInput").on("focusout", function(){
    materno= $("#maternoInput").val();
    if(materno== "" || materno == " "){
        $("#maternoInput").css("border-color", "red");
        $("#maternoSmall").text(empty_msg);
        $("#maternoSmall").toggle();
    }else{
        $("#maternoSmall").css("visibility", "hidden");
        $("#maternoInput").css("border-color", "#63E400");
    }

})

$("#form-boton").on("click", function(){
    $("#primerSmall").text("Pedro"); 
    email= $("#emailInput").val();
    materno= $("#maternoInput").val();
    paterno= $("#paternoInput").val();
    pnombre= $("#p_nombre").val();
    snombre= $("#s_nombre").val();
    console.log(email + " H");

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
        $("#maternoSmall").css("visibility", "visible");
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
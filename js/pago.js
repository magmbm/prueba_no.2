import { settings } from "./tienda.js";

const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let empty_msg= "No puede dejar este campo vacio";
let data;
let cantidad= localStorage.getItem("cantidad");
let data_idx= localStorage.getItem("idx");


if(regex.test("pedro@yahoo.cl")){
    console.log("Reg ex sirve");
}else{
    console.log("Reg ex NO sirve");
};

$(document).ready(function(){
    let email= $("#emailInput").val();
    let pnombre= $("#p_nombre").val();
    let paterno= $("#paternoInput").val();
    let materno= $("#maternoInput").val();

    $.ajax(settings).done(function (response){
        data= response.results[data_idx];
        document.getElementById("pedido-img").src= (data.background_image).toString();
        $(".pedido-nombre").append(
            (data.name).toString()
        );
        $(".pedido-cant").append(
            cantidad 
        );
        $(".sub-precio").append(
            '<p>'+ (cantidad * 50990).toString() +'</p>'
        );
        $(".total-precio").append(
            '<p>'+ (cantidad * 50990).toString() + '</p>'
        );
    })

    $("#emailSmall").css("visibility", "hidden");
    $("#primerSmall").css("visibility", "hidden");
    $("paternoSmall").css("visibility", "hidden");
    $("maternoSmall").css("visibility", "hidden");

    $("#emailSmall").css("color", "red");
    $("#primerSmall").css("color", "red");
    $("paternoSmall").css("color", "red");
    $("maternoSmall").css("color", "red");

    $("#emailInput").on("focusout", function(){
        email= $("#emailInput").val();
        if(email== "" || email == " "){
            document.getElementById("emailSmall").innerHTML= empty_msg;
            $("#emailSmall").css("visibility", "visible");
        }else if(!regex.test(email)){
            document.getElementById("emailSmall").innerHTML= "Debe ingresar un email valido";
            $("#emailSmall").css("visibility", "visible");
        }else{
            console.log("3");
            $("#emailSmall").css("visibility", "hidden");
        }
    });

    $("#p_nombre").on("focusout", function(){
        pnombre= $("#p_nombre").val();
        if(pnombre== "" || pnombre == " "){
            document.getElementById("primerSmall")= empty_msg;
            $("#primerSmall").css("visibility", "visible");
        }else{
            $("#primerSmall").css("visibility", "hidden");
        }
    })

});



//Revisar

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
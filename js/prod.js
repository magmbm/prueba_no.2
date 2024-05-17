import { settings, getGenero } from "./tienda.js";

let data_idx= localStorage.getItem("idx");
let data;
let cant= 0;

$(document).ready(function(){

    $.ajax(settings).done(function (response) {
        data= response.results[data_idx];
        document.getElementById("producto-img").src= data.background_image.toString();
        $("#prod-titulo").text(data.name);
        console.log(response.results[data_idx].background_image);
        $("#fecha-prod").append(data.released);
        $("#genre-prod").append(getGenero(response.results[data_idx]));
        $("#rating-prod").append(data.rating);
    })
    $("#plus").on("click", function(){
        cant= parseInt(document.getElementById("prod-cant").value);
        cant++;
        document.getElementById("prod-cant").value= cant;
        
    })
    $("#minus").on("click", function(){
        cant= parseInt(document.getElementById("prod-cant").value);
        if(cant>1){
            cant--;
            document.getElementById("prod-cant").value= cant;
        }
    })
    $("#prod-add").on("click", function(){
        localStorage.setItem( "cantidad", document.getElementById("prod-cant").value);
        window.location = $('#prod_anch').attr('href');
    })

})

$("#prod-add").on("click", function(){
    console.log(data_idx);
})
import { settings } from "./tienda.js";

let data_idx= localStorage.getItem("idx");
let data;

$(document).ready(function(){

    $.ajax(settings).done(function (response) {
        data= response.results[data_idx];
        document.getElementById("producto-img").src= data.background_image.toString();
        $("#prod-titulo").text(data.name);
        console.log(response.results[data_idx].background_image);
    })

})

$("#prod-add").on("click", function(){
    console.log(data_idx);
})
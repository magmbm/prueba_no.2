import { insertGameNames } from "./main.js";

export const settings = {
	async: true,
	crossDomain: true,
	url: 'https://rawg-video-games-database.p.rapidapi.com/games?key=5d2d49ee1c9a492383db4a282bf3d3de',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9435183804msh6c9379f949be408p1466dbjsn0c1f158cd172',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

function getGenero(data){
    let genero_str= '';
    $.each(data.genres, function(i, item){
        if(i>0){
            genero_str+= ', ';
        }
        genero_str+= item.name;
    })
    return genero_str;
}

console.log(2);

export function getIndexOfData(){

}

export let productos= [];



$(document).ready(function(){
    $.ajax(settings).done(function (response) {
        console.log(response);
        $.each(response.results, function(i, item){
            $("#store-display").append(
                '<div class="carta">' +
                    '<img src="' + item.background_image +'"alt="Avatar" class="carta-img"> ' +
                    '<div class="card-cont">' +
                        '<div class="upper-cont">'+
                            '<h4 class="my-3"><b>'+ item.name + '</b></h4>' +
                            '<p>'+ getGenero(item) +'</p>' +
                            '<p>$50.990</p>' +
                        '</div>'+
                        '<div class="lower-cont">'+
                            '<button id="store-btn-'+ i.toString() +'" class="btn btn-primary carta-btn" type="button">Ver más</button>' +
                        '</div>'+
                    '</div>' +
                '</div>'
            );
        })
    });
})
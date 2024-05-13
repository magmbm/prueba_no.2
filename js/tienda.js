const settings = {
	async: true,
	crossDomain: true,
	url: 'https://rawg-video-games-database.p.rapidapi.com/games?key=5d2d49ee1c9a492383db4a282bf3d3de',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9435183804msh6c9379f949be408p1466dbjsn0c1f158cd172',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};



$(document).ready(function(){
    $.ajax(settings).done(function (response) {
        $("#store-display").append(
            '<div class="carta">' +
            '<img src="/img/logo_1.png" alt="Avatar" style="width:100%">' +
            '<div class="card-cont">' +
              '<h4><b>John Doe</b></h4>' +
              '<p>Architect & Engineer</p>' +
            '</div>' +
            '</div>'
        );
    });
})
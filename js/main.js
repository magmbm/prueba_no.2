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

$.ajax(settings).done(function (response) {
	console.log(response);
});
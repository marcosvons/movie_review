window.onload=function(){
  var APIkey="23b5083840125a6643dffb1e3daa3bff"
  var URLPoster="https://image.tmdb.org/t/p/original/"

//series populares
  fetch("https://api.themoviedb.org/3/tv/popular?api_key="+APIkey+"&page=1")
  .then(function (response) {
    return response.json();
  })
  .then(function (respuesta) {
    var seriesPopulares = respuesta.results;
    console.log(seriesPopulares);
    for (var i = 0; i < seriesPopulares.length; i++) {
    document.querySelector("#seriesPopulares").innerHTML += "<li><a href='detalle.html?idSerie="+seriesPopulares[i].id+"'><img src="+URLPoster+seriesPopulares[i].poster_path+" alt=''></a></li>"
  }

  })

//series mayor puntaje

fetch("https://api.themoviedb.org/3/tv/top_rated?api_key="+APIkey+"&page=1")
.then(function (response) {
  return response.json();
})
.then(function (respuesta) {
  var seriesMejorPuntuadas = respuesta.results;
  console.log(seriesMejorPuntuadas);
  for (var i = 0; i < seriesMejorPuntuadas.length; i++) {
  document.querySelector("#seriesMejorPuntuadas").innerHTML += "<li><a href='detalle.html?idSerie="+seriesMejorPuntuadas[i].id+"'><img src="+URLPoster+seriesMejorPuntuadas[i].poster_path+" alt=''></a></li>"
}

})

//series al AIRE

fetch("https://api.themoviedb.org/3/tv/airing_today?api_key="+APIkey+"&language=en-US")
.then(function (response) {
  return response.json();
})
.then(function (respuesta) {
  var seriesAlAire = respuesta.results;
  console.log(seriesAlAire);
  for (var i = 0; i < seriesAlAire.length; i++) {
  document.querySelector("#seriesAlAire").innerHTML += "<li><a href='detalle.html?idSerie="+seriesAlAire[i].id+"'><img src="+URLPoster+seriesAlAire[i].poster_path+" alt=''></a></li>"
}

})

//DROPDOWN NAV PARA LOS GENEROS DE LAS SERIES


fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=" + APIkey)
.then(function (response) {
  return response.json();
  })
.then(function (seriesGeneros) {
  console.log(seriesGeneros);
  for (var i = 0; i < seriesGeneros.genres.length; i++) {
    document.querySelector("#dropdowngeneros").innerHTML += "<li><a href='seriesporgenero.html?idGenero="+seriesGeneros.genres[i].id+"'>"+seriesGeneros.genres[i].name+"</a></li>"
    }})






}

window.onload=function(){
  var APIkey="23b5083840125a6643dffb1e3daa3bff"
  var URLPoster="https://image.tmdb.org/t/p/original/"
  var urlParams = new URLSearchParams(location.search);
  var query = urlParams.get('idGenero');

  fetch("https://api.themoviedb.org/3/discover/tv?api_key="+APIkey+"&language=en-US&sort_by=popularity.desc&page=1&with_genres="+query)
  .then(function (response) {
    return response.json();
  })
  .then(function (seriesPorGenero) {
    console.log(seriesPorGenero);
    for (var i = 0; i < seriesPorGenero.results.length; i++) {
    document.querySelector("#seriesPorGenero").innerHTML += "<li><a href='detalle.html?idSerie="+seriesPorGenero.results[i].id+"'><img src="+URLPoster+seriesPorGenero.results[i].poster_path+" alt=''></a></li>"
  }

  })

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=" + APIkey)
  .then(function (response) {
    return response.json();
    })
  .then(function (seriesGeneros) {
    console.log(seriesGeneros);
    for (var i = 0; i < seriesGeneros.genres.length; i++) {
      if (query == seriesGeneros.genres[i].id) {
      document.querySelector("#nombreDelGenero").innerHTML = "Genero elegido: " + seriesGeneros.genres[i].name
      }

      }})

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

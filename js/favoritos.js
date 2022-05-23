window.onload = function (){
  var APIkey="23b5083840125a6643dffb1e3daa3bff"
  var URLPoster="https://image.tmdb.org/t/p/original/"


  var recuperoStorage = localStorage.getItem("seriesFavoritas");


      if (recuperoStorage == null ){

        seriesFavoritas=[];
        document.querySelector('#seriesFavoritas').innerHTML = "<li>No hay ninguna serie favorita</li>"
      }
      else {

        seriesFavoritas=JSON.parse(recuperoStorage);

      }

      for (var i = 0; i < seriesFavoritas.length; i++) {
        fetch("https://api.themoviedb.org/3/tv/"+seriesFavoritas[i]+"?api_key="+APIkey+"&language=en-US")
        .then(function (response) {
          return response.json();
        })
        .then(function (serieSolicitada) {
          document.querySelector('#seriesFavoritas').innerHTML += "<li><a href='detalle.html?idSerie="+serieSolicitada.id+"'><img src="+URLPoster+serieSolicitada.poster_path+" alt=''></a></li>"

        })
      }





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

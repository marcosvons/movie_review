window.onload=function(){


  var APIkey="23b5083840125a6643dffb1e3daa3bff";
  var URLPoster="https://image.tmdb.org/t/p/original/";
  var urlParams = new URLSearchParams(location.search);
  var query = urlParams.get('idSerie');

  fetch("https://api.themoviedb.org/3/tv/" + query + "?api_key="+ APIkey +"&language=en-ES")
  .then(function (response) {
    return response.json();
  })
  .then(function (serieSolicitada) {
    console.log(serieSolicitada);

    document.querySelector("div.titulo_serie").innerHTML = serieSolicitada.name ;
    for (var i = 0; i < serieSolicitada.genres.length; i++) {
    document.querySelector("div.genero_serie").innerHTML += serieSolicitada.genres[i].name+" "
  }
    document.querySelector("div.sinopsis_serie").innerHTML = serieSolicitada.overview  ;
    document.querySelector("div.fecha_estreno").innerHTML = "Fecha de estreno: "+ serieSolicitada.first_air_date ;
    document.querySelector("div.poster_serie img").src = "https://image.tmdb.org/t/p/original"+serieSolicitada.poster_path ;
  })

//TRAILER DE LA SERIE


  fetch("https://api.themoviedb.org/3/tv/"+query+"/videos?api_key=" + APIkey)
  .then(function (response) {
    return response.json();
    })
  .then(function (serieSolicitada) {
    console.log(serieSolicitada);
    document.querySelector("div.trailer_serie iframe").src = "https://www.youtube.com/embed/" + serieSolicitada.results[0].key
  })



//RECOMENDACIONES DE LA SERIE



  fetch("https://api.themoviedb.org/3/tv/"+query+"/recommendations?api_key="+APIkey+"&page=1")
  .then(function (response) {
    return response.json();
    })
  .then(function (seriesRecomendadas) {
    console.log(seriesRecomendadas);
    for (var i = 0; i < seriesRecomendadas.results.length; i++) {
      if (seriesRecomendadas.results[i].poster_path != null) {
        document.querySelector("#seriesRecomendadas").innerHTML += "<li><a href='detalle.html?idSerie="+seriesRecomendadas.results[i].id+"'><img src="+URLPoster+seriesRecomendadas.results[i].poster_path+" alt=''></a></li>"
      }


    }

  })

  document.querySelector('#boton_recomendaciones').onclick = function (){
    if (document.querySelector('div.series_recomendadas').style.display == "none") {
      document.querySelector('div.series_recomendadas').style.display = "block";
    } else {
    document.querySelector('div.series_recomendadas').style.display = "none";
    }

  }



//FAVORITOS


var recuperoStorage = localStorage.getItem("seriesFavoritas");


    if (recuperoStorage == null ){

      seriesFavoritas=[];
    }
    else {

      seriesFavoritas=JSON.parse(recuperoStorage);
    }


if (seriesFavoritas.includes(query)){
  document.querySelector("button.favoritos").innerHTML="Quitar de favoritos"
}


  document.querySelector("button.favoritos").onclick=function(){


if (seriesFavoritas.includes(query)==true){

  var index=seriesFavoritas.indexOf(query)
  seriesFavoritas.splice(index, 1)
    document.querySelector("button.favoritos").innerHTML="Agregar a favoritos"
}
else {

  seriesFavoritas.push(query);
    document.querySelector("button.favoritos").innerHTML="Quitar de favoritos"
}



var infoParaStorage=JSON.stringify(seriesFavoritas);
localStorage.setItem("seriesFavoritas", infoParaStorage)
console.log(localStorage);

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

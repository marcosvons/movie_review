window.onload=function(){
  var APIkey="23b5083840125a6643dffb1e3daa3bff"
  var URLPoster="https://image.tmdb.org/t/p/original/"
  var urlParams = new URLSearchParams(location.search);
  var query = urlParams.get('buscador');

 //RESULTADOS DEL BUSCADOR

   fetch("https://api.themoviedb.org/3/search/tv?api_key="+APIkey+"&language=en-US&query="+query+"&page=1")
   .then(function (response) {
     return response.json();
   })
   .then(function (resultadosBusqueda) {
     console.log(resultadosBusqueda);
    if (resultadosBusqueda.results.length==0) {
      alert("Su busqueda no obtuvo resultados, por favor intente nuevamente.")
    } else {


     for (var i = 0; i < resultadosBusqueda.results.length; i++) {
       if (resultadosBusqueda.results[i].poster_path != null) {
         document.querySelector("#resultadosBusqueda").innerHTML += "<li><a href='detalle.html?idSerie="+resultadosBusqueda.results[i].id+"'><img src="+URLPoster+resultadosBusqueda.results[i].poster_path+" alt=''></a></li>"
       }

   }}

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


       //QUE SE BUSCO

  document.querySelector('#lo_buscado').innerHTML = "Resultados de: " + query



}

window.onload=function(){

  var APIkey="23b5083840125a6643dffb1e3daa3bff"
  var URLPoster="https://image.tmdb.org/t/p/original/"

//genero elegido
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=" + APIkey)
  .then(function (response) {
    return response.json();
    })
  .then(function (seriesGeneros) {
    console.log(seriesGeneros);
    for (var i = 0; i < seriesGeneros.genres.length; i++) {
      document.querySelector("select.generoelegido").innerHTML += "<option value="+seriesGeneros.genres[i].id+">"+seriesGeneros.genres[i].name+"</option>"
      }})

//genero descartado
      fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=" + APIkey)
      .then(function (response) {
        return response.json();
        })
      .then(function (seriesGeneros) {
        console.log(seriesGeneros);
        for (var i = 0; i < seriesGeneros.genres.length; i++) {
          document.querySelector("select.generodescartado").innerHTML += "<option value="+seriesGeneros.genres[i].id+">"+seriesGeneros.genres[i].name+"</option>"
          }})

//año

  for (var i = 1950; i < 2020; i++) {
    document.querySelector("select.generoaño").innerHTML += "<option value="+i+">"+i+"</option>"
  }

//funcionalidad buscador avanzado

document.querySelector("button.buscadoravanzado").onclick=function(e){
  e.preventDefault()

document.querySelector("#seriesBuscadas").innerHTML=""

  var posicion1=document.querySelector("select.generoelegido").selectedIndex
  var options1=document.querySelector("select.generoelegido").options

  var posicion2=document.querySelector("select.generodescartado").selectedIndex
  var options2=document.querySelector("select.generodescartado").options

  var posicion3=document.querySelector("select.generoaño").selectedIndex
  var options3=document.querySelector("select.generoaño").options

  var posicion4=document.querySelector("select.generoorden").selectedIndex
  var options4=document.querySelector("select.generoorden").options


  var link="https://api.themoviedb.org/3/discover/tv?api_key=23b5083840125a6643dffb1e3daa3bff&language=en-US"

  if (posicion1!=-1 || posicion1!=0) {
    var link = link + "&with_genres=" + options1[posicion1].value
  }
    if (posicion2!=-1 || posicion2!=0) {
      var link = link + "&without_genres=" + options2[posicion2].value

  }

  if (posicion3!=-1 || posicion3!=0) {
    var link = link + "&first_air_date_year=" + options3[posicion3].value

}
if (posicion4!=-1 || posicion4!=0) {
  var link = link + "&sort_by=" + options4[posicion4].value

}
if ((posicion1!=0) && (posicion2!=0) ) {
  alert("Debe seleccionar unicamente una de las dos casillas de genero")
} else if (posicion1<1 && posicion2<1 && posicion3<1 && posicion4<1) {
  alert("Debe seleccionar algun campo")
} else {


fetch(link)
.then(function (response) {
  return response.json();
  })
.then(function (seriesBuscadas) {
  console.log(seriesBuscadas);
  for (var i = 0; i < seriesBuscadas.results.length; i++) {
    if (seriesBuscadas.results[i].poster_path!=null) {
      document.querySelector("#seriesBuscadas").innerHTML += "<li><a href='detalle.html?idSerie="+seriesBuscadas.results[i].id+"'><img src="+URLPoster+seriesBuscadas.results[i].poster_path+" alt=''></a></li>"
    }}

}
)
}
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

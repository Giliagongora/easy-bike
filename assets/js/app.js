/* Creacion de funcion initMap - 
zoom representa el nivel de profundidad del mapa -
center contiene longitud y latitud */

function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});

/* function getCurrentPosition - exito si el usuario comparte ubicacion - error */
function buscar(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
}
document.getElementById("encuentrame").addEventListener("click", buscar);
var latitud, longitud;

/* para obtener latitud y longitud */
var funcionExito = function(posicion){
	latitud = posicion.coords.latitude;
	longitud = posicion.coords.longitude;

	var miUbicacion = new google.maps.Marker({
		position: {lat:latitud, lng:longitud},
		animation: google.maps.Animation.DROP,
		map: map
	});
	/* aumentaremos profundidad de visualizacion del mapa (map.setZomm) y nuevo centro (map.setCenter) */
	map.setZoom(17);
	map.setCenter({lat:latitud, lng:longitud});
}
	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tu ubicacion");
	}
}



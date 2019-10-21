	//Variable que almacena las coordenadas
	var myCenter;
	var lng;
	var lat;
	
	var agencias = {
		'listado' : [
			{abreviatura: 'Of001', label: 'Oficina 001', ubicacion: new google.maps.LatLng(-12.046666, -77.0424444), tiempoVentanilla: 3, tiempoPlataforma: 4},
			{abreviatura: 'Of002', label: 'Oficina 002', ubicacion: new google.maps.LatLng(-12.044444, -77.0428888), tiempoVentanilla: 3, tiempoPlataforma: 5},
			{abreviatura: 'Of003', label: 'Oficina 003', ubicacion: new google.maps.LatLng(-12.045555, -77.0421111), tiempoVentanilla: 7, tiempoPlataforma: 8}
		]
	}
	
	function mostrarUbicacionReal(ubicacion){
			lng = ubicacion.coords.longitude;
			lat = ubicacion.coords.latitude;
			myCenter=new google.maps.LatLng(lat,lng);
			myCenter=new google.maps.LatLng(-12.046374,-77.0427934);
			cargarMapa();
	}	
	
	function initialize()
	{
		if(!navigator.geolocation){
			alert('Not supported');
		}
		navigator.geolocation.getCurrentPosition(mostrarUbicacionReal, mostrarUbicacionDefault);
	}
	function mostrarUbicacionDefault(){
		myCenter=new google.maps.LatLng(-12.046374,-77.0427934);
		cargarMapa();
	}

	// Función para inicializar el mapa
	function cargarMapa()
	{
		
		var mapa_lima = {
		  //Muestra las coordenadas al centro del mapa
		  center:myCenter,
		  //Zoom del mapa 
		  zoom:16,
		  // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };

		// Creamos un mapa en el contenedor con id divMapa,  usando los parámetros de la variable mapa_lima
		var map=new google.maps.Map(document.getElementById("divMapa"),mapa_lima);
		
		var tbodyVentanilla= document.getElementById("tbodyVentanilla");
		var tbodyPlataforma= document.getElementById("tbodyPlataforma");

		for(var i=0; i<agencias.listado.length;i++){
			//Mostramos el marcador en las coordenadas almacenada en la variable myCenter
			var marker=new google.maps.Marker({
			  position: agencias.listado[i].ubicacion,
			  label : agencias.listado[i].abreviatura
			  });
			//Añadimos el marcador para el mapa utilizando el método setMap()
			marker.setMap(map);
			
			var rowVentanilla = tbodyVentanilla.insertRow(i);
			var rowPlataforma = tbodyPlataforma.insertRow(i);
			// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
			var cell1 = rowVentanilla.insertCell(0);
			var cell2 = rowVentanilla.insertCell(1);
			var cell3 = rowVentanilla.insertCell(2);
			
			var cell4 = rowPlataforma.insertCell(0);
			var cell5 = rowPlataforma.insertCell(1);
			var cell6 = rowPlataforma.insertCell(2);

			// Add some text to the new cells:
			cell1.innerHTML = agencias.listado[i].abreviatura;
			cell2.innerHTML =agencias.listado[i].label;
			cell3.innerHTML =agencias.listado[i].tiempoVentanilla;
			
			cell4.innerHTML = agencias.listado[i].abreviatura;
			cell5.innerHTML =agencias.listado[i].label;
			cell6.innerHTML =agencias.listado[i].tiempoPlataforma;
		}
		
		
	}

	//Mostramos el mapa una vez que cargue el navegador, con el evento addDomListener de Google Maps API
	google.maps.event.addDomListener(window, 'load', initialize);
	
	function openTab(evt, divName) {
		  // Declare all variables
		  var i, tabcontent, tablinks;

		  // Get all elements with class="tabcontent" and hide them
		  tabcontent = document.getElementsByClassName("tabcontent");
		  for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		  }

		  // Get all elements with class="tablinks" and remove the class "active"
		  tablinks = document.getElementsByClassName("tablinks");
		  for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		  }

		  // Show the current tab, and add an "active" class to the button that opened the tab
		  document.getElementById(divName).style.display = "block";
		  evt.currentTarget.className += " active";
		}
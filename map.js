anychart.onDocumentReady(function () {
    var data = [
  		{'id': 'AU', 'value': 300},
  		{'id': 'SA', 'value': 230}, 
  		{'id': 'NG', 'value': 240}, 
  		{'id': 'ZW', 'value': 275}, 
  		{'id': 'AL', 'value': 130}, 
  		//{'id': 'AU.TS', 'value': 190}, 
  		//{'id': 'AU.CT', 'value': 100}, 				 
  		//{'id': 'AU.SA', 'value': 305},                
  		//{'id': 'AU.QL', 'value': 190}  
    ];

    //
    var map = anychart.map();
    map.geoData(anychart.maps.world);

    // set the series
    var series = map.marker(data);
	
	  // disable labels
    series.labels(false);

    // set the container
    map.container('container');
    map.draw();
  });
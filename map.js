anychart.onDocumentReady(function () {
    var data = [
  		{'id': 'AU.WA', 'value': 300},
  		{'id': 'AU.JB', 'value': 230}, 
  		{'id': 'AU.NS', 'value': 240}, 
  		{'id': 'AU.VI', 'value': 275}, 
  		{'id': 'AU.NT', 'value': 130}, 
  		{'id': 'AU.TS', 'value': 190}, 
  		{'id': 'AU.CT', 'value': 100}, 				 
  		{'id': 'AU.SA', 'value': 305},                
  		{'id': 'AU.QL', 'value': 190}  
    ];

    //
    var map = anychart.map();
    map.geoData('anychart.maps.world');

    // set the series
    var series = map.marker(data);
	
	  // disable labels
    series.labels(false);

    // set the container
    map.container('container');
    map.draw();
  });
import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW5vc29yaW8iLCJhIjoiY2wwYTJ1M3d6MDRrZDNpcG96YzZvbWpyOSJ9.8SVbp4Gp1d29Ajhjfd7otA';
if (!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocation')
  throw new Error('Tu navegador no tiene la opcion de Geolocation')
}
ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);


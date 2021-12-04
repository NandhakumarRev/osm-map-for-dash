import { Component, OnInit } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {

  mapOptions:any; 
  data:any;
  map:any;
  title = 'osm-map-for-dash';


  constructor() {
  }

  ngOnInit() {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

//   onMapReady(map: Map) {
//     setTimeout(() => {
//       map.invalidateSize();
//     }, 0);
// }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(12.99, 80.18),
      zoom: 13,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }


  private addSampleMarker() {
    this.data = [[13.022, 80.224, "red", "102"], [13.0213, 80.2231, "green", "103"]];

    for (var x of this.data ){
      console.log("x---->",x[2]=="red" ? 'assets/gps.png':'assets/pin.png');
      var marker = new Marker([x[0], x[1]])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: x[2]=="red" ? 'assets/gps.png':'assets/pin.png'
        })).bindPopup('<b style="color:red;">device id: '+x[3]+' </b>');

      // 

      marker.on('mouseover',function(ev) {
        ev.target.openPopup();
      });

      marker.addTo(this.map);

  //   marker2.addTo(this.map);
    }
  }

  //   const marker = new Marker([13.022, 80.224])
  //     .setIcon(
  //       icon({
  //         iconSize: [25, 41],
  //         iconAnchor: [13, 41],
  //         iconUrl: 'assets/gps.png'
  //       })).bindPopup("<b>test</b>");

  //   marker.on('mouseover',function(ev) {
  //     ev.target.openPopup();
  //   });

  //   const marker2 = new Marker([13.0213, 80.2231])
  //     .setIcon(
  //       icon({
  //         iconSize: [25, 41],
  //         iconAnchor: [13, 41],
  //         iconUrl: 
  //       })).bindPopup("<b>test</b>");

  //   marker2.on('mouseover',function(ev) {
  //     ev.target.openPopup();
  //   });

  //   marker.addTo(this.map);
  //   marker2.addTo(this.map);
  // }

}

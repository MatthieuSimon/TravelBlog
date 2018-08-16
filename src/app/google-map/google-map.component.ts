import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare const google: any;

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {

  private mapType: string = 'ROADMAP';
  private mapOptions: any = {
    center: new google.maps.LatLng(51.5073391, -0.1284288),
    zoom: 16,
    mapTypeControl: true
  };
  private mapInstance: any;

  @ViewChild('map') private mapElement: ElementRef;

  ngOnInit() {
    console.log('init GoogleMapComponent')
    this.mapOptions.mapTypeId = google.maps.MapTypeId[this.mapType];
    this.mapOptions.mapTypeControlOptions = {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.LEFT_BOTTOM
    };
    this.mapInstance = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    console.log(this.mapInstance);
  }

}

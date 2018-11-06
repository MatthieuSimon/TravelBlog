import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { StepService } from "../services/step.service";


declare const google: any;

@Component({
  selector: "google-map",
  templateUrl: "./google-map.component.html",
  styleUrls: ["./google-map.component.css"]
})
export class GoogleMapComponent implements OnInit {
  private mapType: string = "ROADMAP";
  private mapOptions: any = {
    center: new google.maps.LatLng(35.704629, 61.13364),
    zoom: 3,
    mapTypeControl: true
  };
  private mapInstance: any;

  @Output()
  selectedMarker: EventEmitter<any> = new EventEmitter();

  @ViewChild("map")
  private mapElement: ElementRef;

  constructor(public stepService: StepService) {}

  ngOnInit() {
    console.log("init GoogleMapComponent");
    this.mapOptions.mapTypeId = google.maps.MapTypeId[this.mapType];
    this.mapOptions.mapTypeControlOptions = {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.LEFT_BOTTOM
    };
    this.mapInstance = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.addMarkers();
    console.log(this.mapInstance);
  }

  private addMarkers() {
    this.stepService.getSteps().subscribe(steps => {
      for (let step of steps) {
        let marker = new google.maps.Marker({
          animation: null,
          position: new google.maps.LatLng(step.place.latitude, step.place.longitude),
          map: this.mapInstance,
          title: step.id
        });
        marker.addListener("click", () => {
          this.onMarkerClick(marker);
        });
      }
    });
  }

  private onMarkerClick(marker) {
    console.log(marker);
    marker.setAnimation(google.maps.Animation.BOUNCE);
    this.selectedMarker.emit(marker.title);
  }
}

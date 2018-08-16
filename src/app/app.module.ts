import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HorizontalTimelineModule } from './horizontal-timeline/horizontal-timeline.module';
import { ArticleService } from './services/article.service';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HorizontalTimelineModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

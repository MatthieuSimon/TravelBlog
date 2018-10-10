import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from "./app.component";
import { HorizontalTimelineModule } from "./horizontal-timeline/horizontal-timeline.module";
import { StepService } from "./services/step.service";
import { GoogleMapComponent } from "./google-map/google-map.component";
import { BlogComponent } from "./blog/blog.component";

import { RouterModule, Routes } from "@angular/router";
import { VaccinsComponent } from "./pages/vaccins/vaccins.component";
import { SacadosComponent } from "./pages/sacados/sacados.component";
import { TodolistComponent } from "./pages/todolist/todolist.component";
import { QuiSommesNousComponent } from "./pages/quisommesnous/quisommesnous.component";

const appRoutes: Routes = [
  { path: "blog", component: BlogComponent },
  { path: "qui-sommes-nous", component: QuiSommesNousComponent },
  { path: "vaccins", component: VaccinsComponent },
  { path: "sac-a-dos", component: SacadosComponent },
  { path: "to-do-list", component: TodolistComponent },
  { path: "**", component: BlogComponent }
];

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    BlogComponent,
    QuiSommesNousComponent,
    VaccinsComponent,
    SacadosComponent,
    TodolistComponent
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule, HorizontalTimelineModule, RouterModule.forRoot(appRoutes)],
  providers: [StepService, { provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

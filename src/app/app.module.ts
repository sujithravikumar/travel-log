import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VisitedStatesMapComponent } from './visited-states-map/visited-states-map.component';
import { FormsModule }   from '@angular/forms';
import { GoogleGeoChartService } from './services/google-geo-chart.service';
import { GeoChartComponent } from './charts/geo-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitedStatesMapComponent,
    GeoChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GoogleGeoChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

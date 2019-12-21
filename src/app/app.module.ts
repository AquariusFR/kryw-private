import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
// custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FortniteMapComponent } from './fortnite/maps/map/map.component';
import { FortniteMapsComponent } from './fortnite/maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    FortniteMapsComponent,
    FortniteMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

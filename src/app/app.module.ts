import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
// custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FortniteMapComponent } from './fortnite/maps/map/map.component';
import { FortniteMapsComponent } from './fortnite/maps/maps.component';
import { BackgroundComponent } from './background/background.component';


@NgModule({
  declarations: [
    AppComponent,
    FortniteMapsComponent,
    FortniteMapComponent,
    BackgroundComponent
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

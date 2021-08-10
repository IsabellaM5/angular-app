import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PokemonFormComponent } from './pages/pokemon-form/pokemon-form.component';
import { DisplayPokemonComponent } from './pages/display-pokemon/display-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PokemonFormComponent,
    DisplayPokemonComponent,
    PokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PokemonFormComponent } from './pages/pokemon-form/pokemon-form.component';
import { DisplayPokemonComponent } from './pages/display-pokemon/display-pokemon.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'start-page', component: PokemonFormComponent, canActivate: [AuthGuard] },
  { path: 'pokemon', component: DisplayPokemonComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

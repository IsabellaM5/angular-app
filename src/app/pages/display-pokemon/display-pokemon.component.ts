import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrls: ['./display-pokemon.component.css']
})
export class DisplayPokemonComponent implements OnInit {
  pokemon: Pokemon;
  user: any;
  loadCompleted: boolean = false;
  showDetails: boolean = false;

  constructor(private pokemonService: PokemonService, private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemonById(this.user.age)
      .subscribe((data) => {
        this.pokemon = data;
        this.loadCompleted = true;
      })
  }

  getUser() {
    this.user = this.userService.getUserInfo();
  }

  onMoreDetails() {
    this.showDetails = true;
  }

  onLogOut() {
    this.authService.setIsLoggedIn(false);
    this.router.navigateByUrl('/');
  }
}
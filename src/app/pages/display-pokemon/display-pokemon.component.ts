import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrls: ['./display-pokemon.component.css']
})
export class DisplayPokemonComponent implements OnInit {
  pokemon: Pokemon;
  user: any;
  loadCompleted: boolean = false;

  constructor(private pokemonService: PokemonService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemonById(this.user.age)
      .subscribe((data) => {
        console.log(this.pokemon);

        this.pokemon = data;
        this.loadCompleted = true;

        console.log(data);
      })
  }

  getUser() {
    this.user = this.userService.userInfo;
  }

  onClick() {
    this.router.navigateByUrl('/');
  }
}
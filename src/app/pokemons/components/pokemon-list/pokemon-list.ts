import { Component, input } from '@angular/core';
import { PokemonsCard } from "../pokemons-card/pokemons-card";
import { pokemon } from '../../interfaces/pokemons';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonsCard],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  public pokemons = input.required<pokemon[]>();
}

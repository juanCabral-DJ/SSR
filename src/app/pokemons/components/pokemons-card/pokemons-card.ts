import { Component, computed, effect, input } from '@angular/core';
import { pokemon } from '../../interfaces/pokemons';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pokemons-card',
  imports: [RouterLink],
  templateUrl: './pokemons-card.html',
  styleUrl: './pokemons-card.css',
})
export class PokemonsCard {
  pokemon = input.required<pokemon>();

  public readonly image = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`
  })
}

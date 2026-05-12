import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonUnit } from '../../pokemons/interfaces/pokemon-unit';
import { PokemonsServices } from '../../pokemons/services/pokemons';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-page',
  imports: [RouterLink],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.css',
})
export default class PokemonPage implements OnInit {
  private route = inject(ActivatedRoute);
  private services = inject(PokemonsServices);
  private title = inject(Title);
  private meta = inject(Meta);
  public pokemon = signal<PokemonUnit | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) return;


    this.services.loadPokemon(id)
      .pipe(
        tap(pokemon => {
          const pageTitle = `#${pokemon.id} - ${pokemon.name}`;
          const description = `Pagina del pokemon ${pokemon.name}`;
          this.title.setTitle(pageTitle);
          this.meta.updateTag({ name: "description", content: description })
          this.meta.updateTag({ property: "og:title", content: pageTitle })
          this.meta.updateTag({ property: "og:description", content: description })
          this.meta.updateTag({ property: "og:image", content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` })
        })
      )
      .subscribe(this.pokemon.set);
  }
}

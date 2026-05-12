import { Component, signal, OnInit, OnDestroy, inject, ApplicationRef, computed, effect } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { toSignal } from "@angular/core/rxjs-interop"
import { PokemonsServices } from '../../pokemons/services/pokemons';
import { pokemon } from '../../pokemons/interfaces/pokemons';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList, PokemonListSkeleton, RouterLink],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons {
  protected pokemons = signal<pokemon[]>([]);
  private services = inject(PokemonsServices);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  currentpage = toSignal<number>(
    this.route.params.pipe(
      map(params => params["page"] ?? "1"),
      map(page => (isNaN(+page) ? 1 : +page)),
      map(page => Math.max(1, page))
    )
  )

  public loadOnPageChanged = effect(() => {
    this.loadPokemons(this.currentpage())
  })

  public loadPokemons(page = 0) {

    this.services.loadPage(page)
      .pipe(

        tap(() => this.title.setTitle(`Pokemos SSR - page ${page}`))
      ).subscribe(pokemons => {
        this.pokemons.set(pokemons);
      })
  }

}

import { Component, signal, OnInit, OnDestroy, inject, ApplicationRef } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { toSignal } from "@angular/core/rxjs-interop"
import { PokemonsServices } from '../../pokemons/services/pokemons';
import { pokemon } from '../../pokemons/interfaces/pokemons';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons implements OnInit {
  protected pokemons = signal<pokemon[]>([]);
  private services = inject(PokemonsServices);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);
  currentpage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map(params => params.get("page") ?? "1"),
      map(page => (isNaN(+page) ? 1 : +page)),
      map(page => Math.max(1, page))
    )
  )

  ngOnInit(): void {

    this.loadPokemons();
  }

  public loadPokemons(page = 0) {
    const pageLoad = this.currentpage()! + page;

    this.services.loadPage(pageLoad)
      .pipe(
        tap(() => this.router.navigate([], { queryParams: { page: pageLoad } }),),
        tap(() => this.title.setTitle(`Pokemos SSR - page ${pageLoad}`))
      ).subscribe(pokemons => {
        this.pokemons.set(pokemons);
      })
  }

}

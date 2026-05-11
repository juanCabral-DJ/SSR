
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { pokemon } from '../interfaces/pokemons';
import { map, Observable, tap } from 'rxjs';
import { PokemonAPI } from '../interfaces/pokemon-api';
import { PokemonUnit } from '../interfaces/pokemon-unit';

@Injectable({
  providedIn: 'root'
})
export class PokemonsServices {
  private http = inject(HttpClient);

  public loadPage(page: number): Observable<pokemon[]> {
    if (page !== 0) {
      --page;
    }
    page = Math.max(0, page);

    return this.http.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
      .pipe(
        map(resp => {
          const pokemons: pokemon[] = resp.results.map(
            (poke) => ({
              id: poke.url.split("/").at(-2) ?? "",
              name: poke.name,
            })
          );
          return pokemons;
        }),
        tap(pokemons => console.log(pokemons))
      )
  }

  public loadPokemon(id: string) {
    return this.http.get<PokemonUnit>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}

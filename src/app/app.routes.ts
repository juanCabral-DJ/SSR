
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: "pokemons",
    loadComponent: () => import("./pages/pokemons/pokemons").then(a => a.Pokemons)
  },
  {
    path: "pokemons/:id",
    loadComponent: () => import("./pages/pokemon-page/pokemon-page")
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/about").then(a => a.About)
  },
  {
    path: "pricing",
    loadComponent: () => import("./pages/pricing/pricing")
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/contact")
  },
  {
    path: "**",
    redirectTo: "about"
  }
]

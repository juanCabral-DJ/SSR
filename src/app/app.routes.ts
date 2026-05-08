import { Routes } from '@angular/router';

export const routes: Routes = [

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

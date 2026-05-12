
import { RenderMode, ServerRoute } from '@angular/ssr';
import routesMap from '../../routes';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
  {
    path: "pokemons/page/:page",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {

      return Array.from(
        { length: 35 },
        (_, index) => ({
          page: String(index + 1)
        })
      );

    },
  },
];

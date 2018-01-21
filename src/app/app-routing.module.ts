import { Routes, RouterModule } from '@angular/router';

import {
  PortfolioComponent,
  AboutComponent,
  ProductoComponent,
  SearchComponent
} from './components/index.pages';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  // We send an id to show the product
  { path: 'product/:id', component: ProductoComponent },
  { path: 'search/:criteria', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(routes, {useHash: true});


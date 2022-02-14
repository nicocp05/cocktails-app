import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { 
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'search/:name', component: SearchComponent },
      { path: 'cocktail/:id', component: CocktailComponent },
      { path: '', redirectTo: 'home' , pathMatch: 'full' }
    ]
  },
  { path: '**', component: PagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

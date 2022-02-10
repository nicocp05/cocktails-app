import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CocktailComponent } from './cocktail/cocktail.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    CocktailComponent,
    PagesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    CocktailComponent,
    PagesComponent
  ]
})
export class PagesModule { }

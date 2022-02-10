import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCocktails } from 'src/app/actions/cocktail.action';
import { AppState } from 'src/app/interfaces/app-state';
import { Cocktail } from 'src/app/interfaces/cocktail';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public cocktails: Cocktail[] = [];
  public alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

  constructor( 
    private cocktailsService: CocktailsService,
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.getCocktails();
  }

  public getCocktails(): void {
    this.cocktailsService.getCocktails()
    .subscribe( (cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
      this.store.dispatch( getCocktails({ cocktails: [...this.cocktails]}) );
    });
  }
  
}

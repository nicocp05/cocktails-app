import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cocktail } from 'src/app/interfaces/cocktail';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { selectCocktailCollection } from 'src/app/state/selector/cocktail.selector';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public cocktails: Cocktail[] = [];
  public cocktail: string = '';
  public letter: string | undefined;
  public searchByName: boolean = false;
  public load: boolean = false;

  constructor(private cocktailsService: CocktailsService,
              private store: Store,
              private route: ActivatedRoute) 
              {

                this.cocktail = this.route.snapshot.params.name; 

              }
  

  ngOnInit(): void {

    this.getSearchByNameBoolean();
    
    this.searchByName ? this.searchCocktail(this.cocktail) : this.searchFirstLetter(this.cocktail);

  }

  

  public getSearchByNameBoolean() {
    this.store.select(selectCocktailCollection)
      .subscribe( data => {
        this.searchByName = data.searchByName;
      });
  }

  public searchCocktail( cocktail: string ) {
    this.cocktailsService.searchCocktail(cocktail)
      .subscribe( data => {
        this.cocktails = data;
        setTimeout(() => {
          this.load = true;
        }, 500);
      });
  }

  public searchFirstLetter( letter: string ) {
    this.cocktailsService.searchFirstLetter(letter)
      .subscribe( data => {
        this.cocktails = data;
        setTimeout(() => {
          this.load = true;
        }, 500);
      });
  }

}

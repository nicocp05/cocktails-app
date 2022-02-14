import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail';
import { randomCocktail, searchCocktail } from '../state/actions/cocktail.actions';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private url: string = 'https://thecocktaildb.com/api/json/v1/1'

  constructor(private http: HttpClient,
              private store: Store) { }

  public getCocktails(): Observable<Cocktail[]> {
    return this.http.get(`${this.url}/random.php`)
      .pipe( map( (data: any) => {
        this.store.dispatch(randomCocktail({cocktail: data.drinks}));
        return data.drinks       
      }));
  }

  public cocktailDetail( id: string ): Observable<Cocktail> {
    return this.http.get(`${this.url}/lookup.php?i=${id}`)
      .pipe( map( ( data: any ) => {
        return data.drinks[0]
      }));
  }

  public searchCocktail( cocktail: string ): Observable<Cocktail[]> {
    return this.http.get(`${this.url}/search.php?s=${cocktail}`)
      .pipe( map( ( data: any ) => {
        this.store.dispatch(searchCocktail({cocktail: data.drinks}))
        return data.drinks;
      }));
  }
  
  public searchFirstLetter( letter: string ): Observable<Cocktail[]> {
    return this.http.get(`${this.url}/search.php?f=${letter}`)
      .pipe( map( ( data: any ) => {
        this.store.dispatch(searchCocktail({cocktail: data.drinks}))
        return data.drinks;
      }));
  }

}

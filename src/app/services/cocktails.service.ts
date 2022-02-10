import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail';


@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private url: string = 'https://thecocktaildb.com/api/json/v1/1'

  constructor(private http: HttpClient) { }

  public getCocktails(): Observable<Cocktail[]> {
    return this.http.get(`${this.url}/random.php`)
      .pipe( map( (data: any) => {
        return data.drinks       
      }));
  }

  // TODO: Full detail by id - www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
  public cocktailDetail( id: string ): Observable<Cocktail> {
    return this.http.get(`${this.url}/lookup.php?i=${id}`)
      .pipe( map( ( data: any ) => {
        return data.drinks[0]
      }));
  }

  // TODO: Search by name - www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

  // TODO: Search by first letter www.thecocktaildb.com/api/json/v1/1/search.php?f=a

}

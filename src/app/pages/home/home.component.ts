import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cocktail } from 'src/app/interfaces/cocktail';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { deactivateSearchByName, searchByName } from 'src/app/state/actions/cocktail.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public cocktails: Cocktail[] = [];
  public formValue: string = '';
  public alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  public load: boolean = false;

  constructor( 
    private cocktailsService: CocktailsService,
    private router: Router,
    private store: Store
  ){}

  ngOnInit(): void {
    this.getCocktails();
  }

  public onSubmit( form: NgForm ) {
    this.formValue = form.value.search;
    this.store.dispatch(searchByName());
    this.router.navigate(['/search', this.formValue]);
  }

  public searchLetter() {
    this.store.dispatch(deactivateSearchByName());
  }

  public getCocktails(): void {
    this.cocktailsService.getCocktails()
    .subscribe( (cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
      setTimeout(() => {
        this.load = true;
      }, 500);
    });
  }
  
}

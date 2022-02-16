import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from 'src/app/interfaces/cocktail';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  public cocktail: Cocktail | any;
  public cocktailId: string = '';
  public ingredients: string[] = [];
  public load: boolean = false;

  constructor(private cocktailsService: CocktailsService,
              private route: ActivatedRoute) {

                this.cocktailId = this.route.snapshot.params.id;

              }

  ngOnInit(): void {

    this.loadCocktailDetail();

  }

  

  public loadCocktailDetail() {
    this.cocktailsService.cocktailDetail(this.cocktailId)
      .subscribe( data => {
        this.cocktail = data;
        for ( let property in this.cocktail ) {
          if ( property.includes('strIngredient') ) {
            if ( this.cocktail[property] !== null && this.cocktail[property].length > 0 ) {
              this.ingredients.push(this.cocktail[property])
            }
          }
        }
        setTimeout(() => {
          this.load = true;
        }, 500);
      });
  }



}

import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  public cocktail: Cocktail | any;

  constructor(private cocktailsService: CocktailsService) {}

  ngOnInit(): void {
    this.cocktailsService.cocktailDetail('11007')
      .subscribe( data => {
        this.cocktail = data;
        console.log(data);
      });
  }

}

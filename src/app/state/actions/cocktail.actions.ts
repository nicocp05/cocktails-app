import { createAction, props } from '@ngrx/store';
import { Cocktail } from 'src/app/interfaces/cocktail';

export const searchCocktail = createAction(
  '[Cocktail search] Search cocktail by name',
  props<{ cocktail: Cocktail[] }>()
);

export const searchByLetterCocktail = createAction(
  '[Cocktail search] Search cocktail by letter',
  props<{ cocktail: Cocktail[] }>()
);

export const randomCocktail = createAction(
  '[Cocktail Random] Random cocktail',
  props<{ cocktail: Cocktail[] }>()
);

export const searchByName = createAction(
  '[Search] Search by name boolean'
)

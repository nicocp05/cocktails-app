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
  '[Search boolean] Search by name boolean'
)

export const deactivateSearchByName = createAction(
  '[Search boolean] Deactivate search by name boolean'
);

export const cocktailDetail = createAction(
  '[Cocktail] Cocktail detail by id',
  props<{ cocktail: Cocktail }>()
);
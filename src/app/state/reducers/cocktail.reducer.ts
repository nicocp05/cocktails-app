import { createReducer, on, Action } from '@ngrx/store';
import { randomCocktail, searchByLetterCocktail, searchByName, searchCocktail } from '../actions/cocktail.actions';
import { AppState } from '../app-state';

export const initialState: AppState = {
  cocktail: [],
  searchCocktail: undefined,
  searchByName: false
}

export const _cocktailReducer = createReducer(
  initialState,
  on(randomCocktail, (state, { cocktail }) => (
    {...state, cocktail: [...state.cocktail, ...cocktail]})
  ),
  on(searchCocktail, (state, { cocktail }) => (
    {...state, searchCocktail: cocktail}
  )),
  on(searchByLetterCocktail, (state, {cocktail}) => ({
    ...state, searchCocktail: cocktail
  })),
  on(searchByName, state => ({...state, searchByName: true }))
);

export function cocktailReducer(state: AppState | undefined, action: Action) {
  return _cocktailReducer(state, action);
}


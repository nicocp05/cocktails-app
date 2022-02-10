import { Action, createReducer, on } from "@ngrx/store";
import { getCocktails } from "../actions/cocktail.action";
import { AppState } from "../interfaces/app-state";

export const initialState: AppState = {
  cocktails: []
};

export const cocktailReducer = createReducer(
    initialState,
    on(getCocktails, (state, {cocktails}) => ({...state, cocktails})),
  );

export function reducer(state: AppState | undefined, action: Action) {
    return cocktailReducer(state, action);
    }


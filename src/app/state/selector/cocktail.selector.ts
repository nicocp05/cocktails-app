import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app-state';

export const selectCocktail = createFeatureSelector<AppState>('cocktail');

export const selectCocktailCollection = createSelector(
    selectCocktail,
    (cocktail) => {
        return cocktail
    }
);



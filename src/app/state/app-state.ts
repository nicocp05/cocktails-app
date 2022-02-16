import { Cocktail } from "../interfaces/cocktail";

export interface AppState {
    cocktail: Cocktail[];
    searchCocktail: Cocktail[] | undefined,
    searchByName: boolean,
    cocktailDetail: Cocktail | undefined
}
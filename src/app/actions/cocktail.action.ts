import { createAction, props } from "@ngrx/store";
import { Cocktail } from "../interfaces/cocktail";

export const getCocktails = createAction(
    '[Get Cocktails]: Cocktails',
    props<{cocktails: Cocktail[] }>()
)

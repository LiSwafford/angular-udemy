import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import * as RecipeActions from "./recipe.actions";
import * as fromApp from "../../store/app.reducer";

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      "Tasty Schnitzel",
      "A super-tasty Schnitzel - just awesome!",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "What else you need to say?",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ]
};

export function recipeReducer(
  state = initialState,
  action: RecipeActions.RecipeActions
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const oldRecipe = state.recipes[action.payload.index];
      const updatedRecipe = { ...oldRecipe, ...action.payload.updatedRecipe };
      const recipesList = [...state.recipes];
      recipesList[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipesList
      };
    case RecipeActions.DELETE_RECIPE:
      const recipesArray = state.recipes;
      recipesArray.splice(action.payload, 1);
      return {
        ...state,
        recipes: recipesArray
      };
    default:
      return state;
  }
}

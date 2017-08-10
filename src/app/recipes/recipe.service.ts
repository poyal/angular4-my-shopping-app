import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test1', 'Is Test Recipe', 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg'),
    new Recipe('Test2', 'Is Test Recipe', 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

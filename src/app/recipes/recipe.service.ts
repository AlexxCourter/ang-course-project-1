import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Chocolate Milk", "Chocolate syrup mixed into milk.", "https://images.unsplash.com/photo-1585752379769-801711aaf836?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", [new Ingredient("chocolate syrup", 1), new Ingredient("Milk", 1)]),
        new Recipe("Yakisoba", "Japanese style fried noodles, chicken, and vegetables.", "https://plus.unsplash.com/premium_photo-1664475934279-2631a25c42ce?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", [new Ingredient('noodles', 1), new Ingredient('sauce', 1)])
      ];

    constructor(private slService: ShoppinglistService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
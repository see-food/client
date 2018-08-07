import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: any

  constructor() { }

  ngOnInit() {
    this.getRecipe(id)
  }

  getRecipe() {
    this.recipesService.getRecipesById(id).subscribe(recipe => {
      this.recipe = recipe
    })
  }

}

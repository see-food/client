import { Component, OnInit } from '@angular/core'
import { RecipesService } from '../../../services/recipes.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: any
  fav: boolean = true;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    this.recipesService.getRecipesByUser().subscribe(recipes => {
      this.recipes = recipes
    })
  }

  unfav(id) {
    this.fav = false;
    this.recipesService.starRecipe(id).subscribe()
    this.recipes = this.recipes.filter(e => e._id != id)
  }
}

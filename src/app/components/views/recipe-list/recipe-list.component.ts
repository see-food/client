import { Component, OnInit } from '@angular/core'
import { SessionService } from '../../../services/session.service'
import { RecipesService } from '../../../services/recipes.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: any

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    this.recipesService.getRecipesByUser().subscribe(recipes => {
      this.recipes = recipes
    })
  }
}

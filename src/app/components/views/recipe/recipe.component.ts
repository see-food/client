import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: any
  favorite: any

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipe(params['id'])
      this.recipesService.isStarred(params['id']).subscribe(fav => {
        this.favorite = fav
      })
    })
  }

  getRecipe(id) {
    this.recipesService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe
    })
  }

  toggleFav(id) {
    this.recipesService.starRecipe(id).subscribe()
    if (this.favorite == 'yep') {
      this.favorite = 'nope'
    } else {
      this.favorite = 'yep'
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: any
  starred: any
  @Output() toggleFav = new EventEmitter<any>();

  userRecipes: any = []
  

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipesByUser().subscribe(recipes => {
      this.userRecipes = recipes
      this.starred = this.isStarred(this.recipe._id)
    })
  }

  onToggleFav(id) {
    this.toggleFav.emit(id)
    if (this.starred == 'yep') {
      this.starred = 'nope'
    } else {
      this.starred = 'yep'
    }
  }

  isStarred(id) {
    if (this.userRecipes.filter(e => e == id).length > 0) {
      return 'yep'
    } else {
      return 'nope'
    }
  }
}

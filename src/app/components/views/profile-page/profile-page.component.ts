import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { PhotosService } from '../../../services/photos.service';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: any;
  photoArray: any;
  recipeArray: any;

  constructor(private sessionService: SessionService,
              private photoService: PhotosService,
              private recipeService: RecipesService) { 
  }

  ngOnInit() {
    this.sessionService.isLogged().subscribe(user=>{
      this.user=user;
    })
    this.photoService.getPhotosByUser().subscribe(photos=>{
      this.photoArray = photos;
      this.photoArray = this.photoArray.slice(this.photoArray.length-4);
      console.log(this.photoArray)
    })
    this.recipeService.getRecipesByUser().subscribe(recipes=>{
      this.recipeArray = recipes;
      this.recipeArray = this.recipeArray.slice(this.recipeArray.length-4);
      console.log(this.recipeArray)
    })
  }

}

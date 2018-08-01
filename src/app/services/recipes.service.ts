import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { environment } from '../../environments/environment';

import { map, catchError } from 'rxjs/operators';
import { Observable } from "rxjs";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: Http) { }


  newRecipe(recipe) {
    // let { title, category, cuisine, instructions, ingredients } = recipe
    return this.http.post(`${environment.BASE_URL}/api/recipes`, recipe).pipe(
      map((res: Response) => {
        return res.json()
      }),
      catchError(e => of(this.errorHandler(e)))
    )
  }

  getRecipes() {
    return this.http.get(`${environment.BASE_URL}/api/recipes`).pipe(
      map((res: Response) => {
        return res.json()
      }),
      catchError(e => of(this.errorHandler(e)))
    )
  }

  getRecipeById(id) {
    return this.http.get(`${environment.BASE_URL}/api/recipes/${id}`).pipe(
      map((res: Response) => {
        return res.json()
      }),
      catchError(e => of(this.errorHandler(e)))
    )
  }

  getRecipesByUserId() {

  }



  getRecipesByPhotoId() {

  }


  errorHandler(e) {
    console.log('RecipesServiceError')
    console.log(e.message);
    console.log(e);
    return e;
  }
}

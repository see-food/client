import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { environment } from '../../environments/environment';

import { map, catchError } from 'rxjs/operators';
import { Observable } from "rxjs";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: Http) { }
  //Function that returns all photos uploaded by user
  getPhotosByUser() {
    return this.http.get(`${environment.BASE_URL}/api/private/pics`).pipe(
      map((res: Response) => {
        return res.json()
      }),
      catchError(e => of(this.errorHandler(e)))
    )
  }

  //Function that returns all details of a photo included its recipes
  getPhotoById(id) {
    return this.http.get(`${environment.BASE_URL}/api/pics/${id}`).pipe(
      map((res: Response) => {
        return res.json()
      }),
      catchError(e => of(this.errorHandler(e)))
    )
  }

  // getRecipesByPhotoId() {
  //
  // }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

constructor(private http: Http) { }

add(photo: any) {
  return this.http.post(`${environment.BASE_URL}/api/pics`, photo).pipe(
    map((res) => res.json())
  );
}
}

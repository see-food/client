import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

constructor(private http: Http) { }

add(item: any){
  return this.http.post(`http://localhost:3000/api/pics`, item);
}
}

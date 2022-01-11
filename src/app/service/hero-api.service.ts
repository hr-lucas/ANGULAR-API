import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Observable
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

   url: string = `${API_PATH}`;
  
  constructor(
    private http: HttpClient
  ) { }

  
  apiGetId(url: string): Observable<any>{
    return this.http.get<any>(`${this.url}/${url}`)
 }


   apiGetSearch(url: string): Observable<any>{
     return this.http.get<any>(`${this.url}/search/${url}`)
  }

  
}

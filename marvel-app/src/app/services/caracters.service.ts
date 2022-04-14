import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

 URL_API = 'http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=07668fa9876c9e109f4f188a7b4d5c89&hash=1e7339c445f1f8dfd7bd41f1b3f95fc9';


  constructor(private http: HttpClient) { }

   getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
  }

  getCharachter(name: string): Observable<any> {
    return this.http.post<any>(this.URL_API, name)
  }
}
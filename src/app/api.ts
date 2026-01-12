import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  
  getProducts(searchTerm: string = 'music') {
    return this.http.get(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        searchTerm
      )}&entity=song&limit=50`
    );
  }
}

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NASA_API_KEY } from './apiKey';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<string> {
    return this.http
      .get<{ url: string }>(
        'https://api.nasa.gov/planetary/apod?api_key=' + NASA_API_KEY
      )
      .pipe(map((response) => response.url));
  }
}

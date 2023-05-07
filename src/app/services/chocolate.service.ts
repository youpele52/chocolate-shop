import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChocolateData } from 'src/type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ChocolateService {
  private apiUrl = 'http://localhost:5000/data';
  constructor(private http: HttpClient) {}

  getChocolateData(): Observable<ChocolateData[]> {
    return this.http.get<ChocolateData[]>(this.apiUrl);
  }
}

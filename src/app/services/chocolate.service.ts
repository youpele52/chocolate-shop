import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
  private chocolatesSubject = new BehaviorSubject<ChocolateData[]>([]);

  getChocolateData(): Observable<ChocolateData[]> {
    // check if chocolate already exist
    const chocolates = this.chocolatesSubject.getValue();

    if (chocolates.length > 0) {
      return this.chocolatesSubject.asObservable();
    } else {
      // return this.http.get<ChocolateData[]>(this.apiUrl);
      this.http.get<ChocolateData[]>(this.apiUrl).subscribe((chocolates) => {
        this.chocolatesSubject.next(chocolates);
      });
      return this.chocolatesSubject.asObservable();
    }
  }
}

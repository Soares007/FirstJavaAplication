import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computer } from './computer';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {
  url = "http://localhost:3000/computadores";
  constructor(private http: HttpClient) { }
  save(computer: Computer): Observable<Computer> {
    return this.http.post<Computer>(this.url, computer);
  }
}

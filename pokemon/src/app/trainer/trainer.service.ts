import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Trainer } from './Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiUrl: string = environment.baseUrl + 'trainers';

constructor(private http: HttpClient) { }

getTrainers(): Observable<Trainer[]> {
  return this.http.get<Trainer[]>(this.apiUrl);
}

getTrainerDetail(id: number): Observable<Trainer> {
  return this.http.get<Trainer>(`${this.apiUrl}${id}/trainers`);
}

}

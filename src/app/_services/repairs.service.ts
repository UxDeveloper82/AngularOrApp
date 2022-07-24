import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  constructor(private http: HttpClient) { }

  getAllRepairs(): Observable<any>{
    return this.http.get('data/repairs.json');
  }
  getAllComments(): Observable<any>{
    return this.http.get('data/comments.json');
  }

  getAllUsers(): Observable<any> {
    return this.http.get('data/users.json');
  }
  getAllImages(): Observable<any> {
    return this.http.get('data/images.json');
  }
}

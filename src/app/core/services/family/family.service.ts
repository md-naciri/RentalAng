import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Family } from '../../models/family';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private apiUrl = 'http://localhost:8081/api/v1/families';

  constructor(private http: HttpClient) { }

  getFamilies(): Observable<Family[]> {
    return this.http.get<Family[]>(this.apiUrl).pipe(
      map((res: any) => res.data)
    );
  }
  deleteFamily(id: number): Observable<Family> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Family>(url, httpOptions);
  }
  addFamily(family: Family): Observable<Family> {
    return this.http.post<Family>(this.apiUrl, family, httpOptions);
  }
}

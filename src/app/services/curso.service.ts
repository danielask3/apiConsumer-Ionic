import { Injectable } from '@angular/core';
import { Curso } from '../home/Curso.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private getUrl: string = "http://localhost:8081/api/cursos";

  constructor(private _httpClient: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this._httpClient.get<Curso[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveCurso(expense: Curso): Observable<Curso> {
    return this._httpClient.post<Curso>(this.getUrl, expense);
  }

  getCurso(id: number): Observable<Curso> {
    return this._httpClient.get<Curso>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteCurso(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, 
      {responseType: 'text'});
  }
}

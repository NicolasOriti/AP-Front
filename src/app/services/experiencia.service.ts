import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  expURL = 'http://localhost:8080/experiencias';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL);
  }

  public getById(id: number | undefined): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + '/' + id);
  }

  public create(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL, experiencia);
  }

  public update(
    id: number | undefined,
    experiencia: Experiencia
  ): Observable<any> {
    console.log('Experiencia: ', experiencia);
    
    return this.httpClient.put<any>(this.expURL + '/' + id, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + '/' + id);
  }
}

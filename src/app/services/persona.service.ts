import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) {}

  public getPersonaById(): Observable<Persona> {
    return this.http.get<Persona>(`${this.URL}/1`);
  }
}

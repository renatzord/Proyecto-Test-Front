import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from '../actividades/tarea';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private apiUrl = 'http://localhost:8080/api/tareas';
  constructor(private http: HttpClient) { }

  crearTarea(tarea:Tarea){
    return this.http.post(`${this.apiUrl}/crear`, tarea)
  }
}

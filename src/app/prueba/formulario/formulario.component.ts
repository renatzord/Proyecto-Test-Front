import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from './formulario.service';
import { Tarea } from '../actividades/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private router: Router, private formularioService: FormularioService) { }

  tarea: Tarea = {};
  ngOnInit(): void {
  }

  guardarTarea() {
    
    this.formularioService.crearTarea(this.tarea).subscribe(
        response => {
            console.log('Tarea guardada:', response);  

            this.volverActividades()
        },
        error => {
            console.error('Error al guardar la tarea:', error);
        }
    );
}

  volverActividades() {
    this.router.navigate(['']); 
  }
}

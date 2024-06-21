import { Component, OnInit } from '@angular/core';
import { ActividadesService } from './actividades.service';
import { Tarea } from './tarea';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  tarea: Tarea[]=[]
  constructor(private tareasService: ActividadesService,private router: Router) { }

  ngOnInit(): void {
    this.tareasService.getTareas().subscribe((actividad) => {
      this.tarea = actividad;
  });
  }

  deleteTarea(id: number | undefined) {

    if (id !== undefined) {
      this.tareasService.deleteTareas(id).subscribe(() => {
        this.tareasService.getTareas().subscribe((actividad) => {
          this.tarea = actividad;
      });
      });
    }else {
      console.error('ID de tarea indefinido');
    }
    
  }

  completarTarea(id: number | undefined, tarea: Tarea) {

    if (id !== undefined) {
      this.tareasService.completarTareas(id, tarea).subscribe(() => {
        this.tareasService.getTareas().subscribe((actividad) => {
          this.tarea = actividad;
      });
      });
    }else {
      console.error('ID de tarea indefinido');
    }
    
  }

  irAlFormulario() {
    this.router.navigate(['/formulario']);
  }
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from './actividades/actividades.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActividadesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  
})
export class PruebaModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './prueba/formulario/formulario.component';
import { ActividadesComponent } from './prueba/actividades/actividades.component';

const routes: Routes = [
  { path: '', component: ActividadesComponent },
  { path: 'formulario', component: FormularioComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

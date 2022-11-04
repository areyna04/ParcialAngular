import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './listarVehiculo/listarVehiculo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarVehiculoComponent],
  exports: [ListarVehiculoComponent]
})
export class VehiculoModule { }

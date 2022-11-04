import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listarVehiculo',
  templateUrl: './listarVehiculo.component.html',
  styleUrls: ['./listarVehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) =>{
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}

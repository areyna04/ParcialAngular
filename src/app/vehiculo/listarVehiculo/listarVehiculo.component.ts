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
  resumen: String = "";

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) =>{
      this.vehiculos = vehiculos;
      var fin : boolean = false;
      var marcas : Array<String> = [];
      var totales : Array<number> = [];
        for(var i = 0;i<vehiculos.length;i++) {
          if (marcas.includes(vehiculos[i].marca)) {
            for(var j = 0;j<marcas.length;j++) {
              if(marcas[j] == vehiculos[i].marca) {
                totales[j] = totales[j] + 1;
              }
            }
          } else {
            marcas.push(vehiculos[i].marca);
            totales[totales.length] = 1;
          }
        }
        for (let index = 0; index < marcas.length; index++) {
          this.resumen = this.resumen.concat("Total ", marcas[index].toString(), ": " ,totales[index].toString(), "\r")
        }
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}

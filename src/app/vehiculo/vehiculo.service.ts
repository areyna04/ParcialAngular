import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor( private http: HttpClient) { }

  getVehiculos() :Observable<Vehiculo[]> {
    return  this.http.get<Vehiculo[]>(environment.baseUrl);
  }

}

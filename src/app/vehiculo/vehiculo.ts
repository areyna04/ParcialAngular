import { Imagen } from './imagen';

export class Vehiculo {
  id: number = 0;
  marca: string = "";
  linea: string = "";
  referencia: string = "";
  modelo: number = 0;
  kilometraje: number = 0;
  color: string = "";
  imagen: Imagen = {} as Imagen;
}

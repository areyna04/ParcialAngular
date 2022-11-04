/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Vehiculo } from '../vehiculo';

import { ListarVehiculoComponent } from './listarVehiculo.component';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component should render same number of rows as list plus header', async(() => {
    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo();
      vehiculo.id = i;

      component.vehiculos.push(vehiculo);
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let rows = compiled.querySelectorAll('tr')
    expect(rows.length).toEqual(4);
  }));

});

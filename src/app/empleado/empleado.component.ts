import {Component, Input, OnInit} from '@angular/core';
import {EmpleadoService} from '../empleado.service';
import {EmpleadoDTO} from '../empleadoDTO';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado = new EmpleadoDTO();
  constructor(
      private empleadoService: EmpleadoService) { }
  ngOnInit() {}


  agregarRegistro(empleado: EmpleadoDTO) {
    console.log(empleado);
    this.empleadoService.updateRegistro(empleado);
  }

  /*save(): void {
    this.empleadoService.updateRegistro(this.empleado)
        .subscribe();
  }*/

}



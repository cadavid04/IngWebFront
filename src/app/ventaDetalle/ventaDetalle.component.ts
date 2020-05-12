import {Component, Input, OnInit} from '@angular/core';
import {VentaDTO} from '../ventaDTO';
import {VentaDetalleDTO} from '../ventaDetalleDTO';
import {VentaDetalleService} from '../ventaDetalle.service';

@Component({
  selector: 'app-ventadetalle',
  templateUrl: './ventaDetalle.component.html',
  styleUrls: ['./ventaDetalle.component.css']
})
export class VentaDetalleComponent implements OnInit {
  ventaDetalle = new VentaDetalleDTO();

  constructor(
      private ventaDetalleService: VentaDetalleService) { }
  ngOnInit() {}

  agregarRegistro(ventaDetalle: VentaDetalleDTO) {
    console.log(ventaDetalle);
    this.ventaDetalleService.agregarRegistro(ventaDetalle);
  }

}



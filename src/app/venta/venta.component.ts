import {Component, Input, OnInit} from '@angular/core';
import {VentaDTO} from '../ventaDTO';
import {VentaService} from '../venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  venta = new VentaDTO();

  constructor(
      private ventaService: VentaService) { }
  ngOnInit() {}

  agregarRegistro(venta: VentaDTO) {
    console.log(venta);
    this.ventaService.agregarRegistro(venta);
  }

}



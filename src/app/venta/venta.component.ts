import {Component, Input, OnInit} from '@angular/core';
import {VentaDTO} from '../ventaDTO';
import {VentaService} from '../venta.service';
import {ProductoService} from '../producto.service';
import {ProductoDTO} from '../productoDTO';
import {VentaDetalleService} from '../ventaDetalle.service';
import {VentaDetalleDTO} from '../ventaDetalleDTO';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  venta = new VentaDTO();
  ventaDetalle = new VentaDetalleDTO();
  productoTest: string;
  cantidadTest: string;
  productos: ProductoDTO[];

  constructor(
      private ventaService: VentaService,
      private productoService: ProductoService,
      private ventaDetalleService: VentaDetalleService) { }

  ngOnInit() {
    this.getProductos()
  }

  agregarRegistro(venta: VentaDTO) {
    console.log(venta);
    this.ventaService.agregarRegistro(venta);
  }

  ingresarDetalle(ventaDetalle: VentaDetalleDTO) {
    console.log(venta);
    this.ventaDetalleService.agregarRegistro(ventaDetalle);
  }

  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(Productos => this.productos = Productos);
  }

}



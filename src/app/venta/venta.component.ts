import {Component, Input, OnInit} from '@angular/core';
import {VentaDTO} from '../ventaDTO';
import {VentaService} from '../venta.service';
import {ProductoService} from '../producto.service';
import {ProductoDTO} from '../productoDTO';
import {VentaDetalleService} from '../ventaDetalle.service';
import {VentaDetalleDTO} from '../ventaDetalleDTO';

// @ts-ignore
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  venta = new VentaDTO();
  ventaDetalle = new VentaDetalleDTO();
  ventaDetalles: VentaDetalleDTO[];
  productos: ProductoDTO[];
  idVenta: number;


  constructor(
      private ventaService: VentaService,
      private productoService: ProductoService,
      private ventaDetalleService: VentaDetalleService) { }

  ngOnInit() {
    this.getProductos();
  }

  agregarRegistro(venta: VentaDTO) {
    console.log(venta);
    this.ventaService.agregarRegistro(venta).
        subscribe(ss => this.idVenta = ss);

  }

  agregarVentaDetalle(ventaDetalle: VentaDetalleDTO) {
    console.log(ventaDetalle);
    this.ventaDetalle.idVenta = this.idVenta;
    this.ventaDetalleService.agregarRegistro(ventaDetalle)
        .subscribe(VentaDetalles => this.ventaDetalles = VentaDetalles);
  }

  getVentaDetalle(ventaDetalle: VentaDetalleDTO) {
    console.log(ventaDetalle);
    this.ventaDetalleService.agregarRegistro(ventaDetalle);
  }

  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(Productos => this.productos = Productos);
  }

}



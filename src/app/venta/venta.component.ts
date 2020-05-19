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

  nuevaVenta(venta: VentaDTO) {
    console.log(venta);
    venta.empleado = 'aaaa';
    if (venta.id === undefined) {
      this.ventaService.agregarRegistro(venta).
      subscribe(idVenta => this.venta.id = idVenta);
    }
  }

  registrarVenta(venta: VentaDTO) {
    console.log(venta);
    this.ventaService.agregarRegistro(venta).
    subscribe(idVenta => this.venta.id = idVenta);

  }


  agregarVentaDetalle(ventaDetalle: VentaDetalleDTO) {
    console.log(ventaDetalle);
    this.ventaDetalle.idVenta = this.venta.id;
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



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
  producto: ProductoDTO;
  valorTotal: number;

  constructor(
      private ventaService: VentaService,
      private productoService: ProductoService,
      private ventaDetalleService: VentaDetalleService) { }

  ngOnInit() {
    this.getProductos();
  }

  nuevaVenta(venta: VentaDTO) {
    console.log(venta);
    venta.empleado = 'Bryan';
    if (venta.id === undefined) {
      this.ventaService.nuevaVenta(venta).
      subscribe(idVenta => this.venta.id = idVenta);
    }
  }

    registrarVenta(venta: VentaDTO) {
    console.log(venta);
    this.ventaService.actualizarVenta(venta).subscribe(idVenta => this.venta.id = idVenta);
    location.reload();
  }


  agregarVentaDetalle(ventaDetalle: VentaDetalleDTO) {
    console.log(ventaDetalle);
    this.ventaDetalle.idVenta = this.venta.id;



    this.ventaDetalleService.agregarRegistro(ventaDetalle)
        .subscribe(VentaDetalles => this.ventaDetalles = VentaDetalles);


   // this.ventaDetalles.forEach((asd => this.venta.valor = this.venta.valor + (asd.valorUnitario * asd.cantidad)));


    /*this.ventaDetalleService.getSumaTotal(this.venta.id)
        .subscribe(Venta => this.venta.valor = Venta);*/

    // this.productoService.getProducto(this.ventaDetalle.producto).
    //  subscribe(Producto => this.venta.valor = Producto);
    // console.log(ventaDetalle.valorUnitario);
    // console.log(ventaDetalle.cantidad);
   // console.log(ventaDetalle.cantidad * ventaDetalle.valorUnitario);
    // this.venta.valor = this.venta.valor + (ventaDetalle.cantidad * ventaDetalle.valorUnitario);
    // = this.venta.valor + (1000 * this.ventaDetalle.cantidad);
    // console.log(this.producto.precioCompra);
  }


  getVentaDetalle(ventaDetalle: VentaDetalleDTO) {
    console.log(ventaDetalle);
    this.ventaDetalleService.agregarRegistro(ventaDetalle);
  }

  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(Productos => this.productos = Productos);
  }

  /*getProducto(nombre: string): any {
    this.productoService.getProducto(nombre)
        .subscribe(Producto => this.producto = Producto);
  }*/

}



import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {VentaDTO} from './ventaDTO';
import {ProductoService} from './producto.service';
import {ProductoDTO} from './productoDTO';
import {VentaDetalleDTO} from "./ventaDetalleDTO";
import {catchError, tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VentaService{
  productos: ProductoDTO[];
  constructor(
      private http: HttpClient,
      private messageService: MessageService,
      private productoService: ProductoService) { }


  agregarRegistro(ventaDTO: VentaDTO) {
    console.log(ventaDTO);
    return this.http.post<number>( 'http://localhost:8080/ingweb-api/ventas', ventaDTO, httpOptions)
        ;
  }

  getVentaDetalles(ventaDetalleDTO: VentaDetalleDTO): Observable<VentaDetalleDTO[]> {
    return this.http.post<VentaDetalleDTO[]>('http://localhost:8080/ingweb-api/detalleVentas', ventaDetalleDTO, httpOptions)
        .pipe(
            tap(_ => this.log('fetched ventaDetalle')),
            catchError(this.handleError<VentaDetalleDTO[]>('getVentaDetalles', []))
        );
  }

  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(Productos => this.productos = Productos);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`EmpleadoService: ${message}`);
  }
}

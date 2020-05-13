import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {VentaDTO} from './ventaDTO';
import {ProductoService} from './producto.service';
import {ProductoDTO} from './productoDTO';

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
    console.log(ventaDTO)
    return this.http.post<VentaDTO>( 'http://localhost:8080/ingweb-api/ventas', ventaDTO, httpOptions)/*.pipe(
        tap((newHero: RegistroActividadDTO) => this.log(`added usuario w/ id=${newusuario.id}`)),
        catchError(this.handleError<UsuarioDTO>('agregarRegistro'))
    );*/.subscribe();
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

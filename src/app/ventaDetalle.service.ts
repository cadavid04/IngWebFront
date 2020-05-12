import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {VentaDTO} from './ventaDTO';
import {VentaDetalleDTO} from './ventaDetalleDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VentaDetalleService{
  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }


  agregarRegistro(ventaDetalleDTO: VentaDetalleDTO) {
    console.log(ventaDetalleDTO)
    return this.http.post<VentaDetalleDTO>( 'http://localhost:8080/ingweb-api/detalleVentas', ventaDetalleDTO, httpOptions).subscribe();
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
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {VentaDTO} from './ventaDTO';
import {ProductoDTO} from './productoDTO';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService{
  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }


  getProductos(): Observable<ProductoDTO[]> {
    return this.http.get<ProductoDTO[]>('http://localhost:8080/ingweb-api/productos')
        .pipe(
            tap(_ => this.log('fetched productos')),
            catchError(this.handleError<ProductoDTO[]>('getProductos', []))
        );
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
    this.messageService.add(`ProductoService: ${message}`);
  }
}

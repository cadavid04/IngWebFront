import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {RegistroAjuste} from './registroAjuste';
import {MessageService} from './message.service';
import {RegistroAjusteDTO} from './registroAjusteDTO';
import {EmpleadoDTO} from './empleadoDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }


  /*updateRegistro(empleadoDTO: EmpleadoDTO): Observable<any> {
    return this.http.put( 'http://localhost:8080/ingweb-api/empleados/', empleadoDTO, httpOptions).pipe(
        tap(_ => this.log(`updateRegistro id=${empleadoDTO.id}`)),
        catchError(this.handleError<any>('updateRegistro'))
    );
  }*/

  updateRegistro(empleadoDTO: EmpleadoDTO) {
    console.log(empleadoDTO)
    return this.http.put<RegistroAjusteDTO>
    ( 'http://localhost:8080/ingweb-api/empleados/', empleadoDTO, httpOptions).subscribe();
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

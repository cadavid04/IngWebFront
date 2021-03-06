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
export class RegistroAjusteService {
  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  updateRegistro(registroAjusteDTO: RegistroAjusteDTO): Observable<any> {
    return this.http.put( 'http://localhost:8080/ingweb-api/ajustes/', registroAjusteDTO, httpOptions).pipe(
        tap(_ => this.log(`updateRegistro id=${registroAjusteDTO.id}`)),
        catchError(this.handleError<any>('updateRegistro'))
    );
  }

  agregarRegistro(registroAjusteDTO: RegistroAjusteDTO) {
    console.log(registroAjusteDTO)
    return this.http.post<EmpleadoDTO>
    ( 'http://localhost:8080/ingweb-api/ajustes/', registroAjusteDTO, httpOptions).subscribe();
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
    this.messageService.add(`RegistroActividadService: ${message}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {Grupo} from './grupo';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>('http://localhost:8080/docente-api/actividades/grupos/1')
        .pipe(
            tap(_ => this.log('fetched grupos')),
            catchError(this.handleError<Grupo[]>('getGrupos', []))
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
    this.messageService.add(`GetGrupos: ${message}`);
  }
}

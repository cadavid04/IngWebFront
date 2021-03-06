import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {ReporteDTO} from './reporteDTO';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ReporteService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService,
) { }

    getReporteVentaPorFechas(fechaInicial: Date, fechaFinal: Date): Observable<ReporteDTO[]> {
        return this.http.get<ReporteDTO[]>
        ('http://localhost:8080/ingweb-api/reportes/VentasPorFechas?fechaInicial=' + fechaInicial + '&fechaFinal=' + fechaFinal)
            .pipe();
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

import { Component, OnInit } from '@angular/core';
import {ReporteDTO} from '../reporteDTO';
import {ReporteService} from '../reporte.service';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  fechaInicial: Date;
  fechaFinal: Date;
  reportes: ReporteDTO[];

  constructor(
      private reporteService: ReporteService) { }

  ngOnInit() {
  }


  getReporteVentaPorFechas(): void {
    this.reporteService.getReporteVentaPorFechas(this.fechaInicial, this.fechaFinal)
        .subscribe(Reporte => this.reportes = Reporte);
  }

}

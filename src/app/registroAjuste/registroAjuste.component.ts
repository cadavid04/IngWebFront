import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {RegistroAjusteService} from '../registroAjuste.service';
import {RegistroAjusteDTO} from '../registroAjusteDTO';


@Component({
    selector: 'app-ajuste',
    templateUrl: './registroAjuste.component.html',
    styleUrls: ['./registroAjuste.component.css']
})
export class RegistroAjusteComponent implements OnInit {
    registroAjustes = new RegistroAjusteDTO();

    constructor(
        private registroService: RegistroAjusteService) { }
    ngOnInit() {}

    agregarRegistro(registroActividad: RegistroAjusteDTO) {
        console.log(registroActividad);
        this.registroService.agregarRegistro(registroActividad);
    }

}

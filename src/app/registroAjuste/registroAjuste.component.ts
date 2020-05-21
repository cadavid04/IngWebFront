import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {RegistroAjusteService} from '../registroAjuste.service';
import {RegistroAjusteDTO} from '../registroAjusteDTO';
import {ProductoService} from '../producto.service';
import {ProductoDTO} from '../productoDTO';


@Component({
    selector: 'app-ajuste',
    templateUrl: './registroAjuste.component.html',
    styleUrls: ['./registroAjuste.component.css']
})
export class RegistroAjusteComponent implements OnInit {
    registroAjustes = new RegistroAjusteDTO();
    productos: ProductoDTO[];

    constructor(
        private registroService: RegistroAjusteService,
        private productoService: ProductoService) { }

        ngOnInit() {
        this.getProductos();
    }

    agregarRegistro(registroActividad: RegistroAjusteDTO) {
        console.log(registroActividad);
        this.registroService.agregarRegistro(registroActividad);
    }

    getProductos(): void {
        this.productoService.getProductos()
            .subscribe(Productos => this.productos = Productos);
    }

}

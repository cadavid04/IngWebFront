import { Component, OnInit } from '@angular/core';
import {UsuarioDTO} from '../usuarioDTO';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario = new UsuarioDTO();

  constructor(
      private usuarioService: UsuarioService) { }
  ngOnInit() {}

  agregarRegistro(usuario: UsuarioDTO) {
    console.log(usuario);
    this.usuarioService.agregarRegistro(usuario);
  }


}

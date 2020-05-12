import { Routes } from '@angular/router';

import { RegistroAjusteComponent } from '../../registroAjuste/registroAjuste.component';
import { ReporteComponent } from '../../reportes/reporte.component';
import { EmpleadoComponent } from '../../empleado/empleado.component';
import { UsuarioComponent } from '../../usuario/usuario.component';
import {VentaComponent} from '../../venta/venta.component';
import {VentaDetalleComponent} from '../../ventaDetalle/ventaDetalle.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'registroAjuste',      component: RegistroAjusteComponent },
    { path: 'reporte',   component: ReporteComponent },
    { path: 'empleado',     component: EmpleadoComponent },
    { path: 'usuario',     component: UsuarioComponent},
    { path: 'venta',     component: VentaComponent},
    { path: 'ventadetalle',     component: VentaDetalleComponent}
];

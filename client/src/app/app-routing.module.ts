import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerveceriaHomeComponent } from './pages/cerveceria-home/cerveceria-home.component';
import { UniversidadesHomeComponent } from './pages/universidades-home/universidades-home.component';
import { ManipulateCerveceriaComponent } from './pages/manipulate-cerveceria/manipulate-cerveceria.component';
import { FarmaciasHomeComponent } from './pages/farmacias-home/farmacias-home.component';
import { CaesHomeComponent } from './pages/caes-home/caes-home.component';
import { SupermercadosHomeComponent } from './pages/supermercados-home/supermercados-home.component';
import { ManipulateUniversidadComponent } from './pages/manipulate-universidad/manipulate-universidad.component';
import { ManipulateFarmaciaComponent } from './pages/manipulate-farmacia/manipulate-farmacia.component';
import { ManipulateCaeComponent } from './pages/manipulate-cae/manipulate-cae.component';
import { ManipulateSupermercadoComponent } from './pages/manipulate-supermercado/manipulate-supermercado.component';

const routes: Routes = [
  { path: '', redirectTo: 'cervecerias-home', pathMatch: 'full'},
  { path: 'cervecerias-home', component: CerveceriaHomeComponent },
  { path: 'manipulate-cerveceria', component: ManipulateCerveceriaComponent },
  { path: 'universidades-home', component: UniversidadesHomeComponent },
  { path: 'manipulate-universidad', component: ManipulateUniversidadComponent },
  { path: 'farmacias-home', component: FarmaciasHomeComponent },
  { path: 'manipulate-farmacia', component: ManipulateFarmaciaComponent },
  { path: 'caes-home', component: CaesHomeComponent },
  { path: 'manipulate-cae', component: ManipulateCaeComponent },
  { path: 'supermercados-home', component: SupermercadosHomeComponent },
  { path: 'manipulate-supermercado', component: ManipulateSupermercadoComponent },
  { path: '**', redirectTo: 'cervecerias-home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

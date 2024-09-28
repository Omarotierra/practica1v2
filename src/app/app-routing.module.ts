import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DescargarXmlComponent } from './descargar-xml/descargar-xml.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'descargar-xml', component: DescargarXmlComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

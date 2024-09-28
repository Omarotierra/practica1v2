import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DescargarXmlComponent } from './descargar-xml/descargar-xml.component';
import { GeneradorXmlService } from './services/generador-xml.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavBarComponent,
    CatalogoComponent,
    NosotrosComponent,
    DescargarXmlComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GeneradorXmlService],
  bootstrap: [AppComponent],
})
export class AppModule {}

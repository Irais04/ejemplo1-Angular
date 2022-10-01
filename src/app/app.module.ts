import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//IMPORTAR FILTROS PARA LAS TABLAS 
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFiltroPipe } from './product/producto-filtro.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { MenuComponent } from './menu/menu.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFiltroPipe,
    OperasBasComponent,
    MenuComponent,
    CinepolisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //OTRA PARTE DEL IMPORTAR LOS FILTROS
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

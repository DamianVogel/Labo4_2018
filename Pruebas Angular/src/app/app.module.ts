import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponenteComponent } from './componentes/prueba-componente/prueba-componente.component';

const miRuteo = [{path:'prueba', component: PruebaComponenteComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponenteComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

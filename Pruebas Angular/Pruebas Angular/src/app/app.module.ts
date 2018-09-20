import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
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
    BrowserModule,
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

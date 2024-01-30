import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenemeComponent } from './components/deneme/deneme.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { RouterModule } from '@angular/router';
import { ButtonCompanentComponent } from './components/button-companent/button-companent.component';



@NgModule({
  declarations: [
    AppComponent,
    DenemeComponent,
    AnasayfaComponent,
    HakkimizdaComponent,
    IletisimComponent,
    ButtonCompanentComponent
],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

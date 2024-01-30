import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';

const routes: Routes = [
  {path: '' , component: AnasayfaComponent},
  {path: 'iletisim',component: IletisimComponent},
  {path: 'hakkimizda', component: HakkimizdaComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

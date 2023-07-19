import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';


const routes: Routes = [
  {path: 'rutas', component: AboutComponent},
  {path: 'quienes-somos',component: QuienesSomosComponent},
  {path: '*',pathMatch: 'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

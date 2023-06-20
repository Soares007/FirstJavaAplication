import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'computadores', component: ComputadoresComponent},
  {path: 'random', component: RandomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

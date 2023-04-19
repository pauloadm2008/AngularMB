import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ListRenderComponent } from './components/list-render/list-render.component';


const routes: Routes = [
{ path: '', component: PrimeiroComponenteComponent },
{ path: 'list', component: ListRenderComponent }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

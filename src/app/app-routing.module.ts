import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


const routes: Routes = [
{ path: '', component: PrimeiroComponenteComponent },
{ path: 'list', component: ListRenderComponent },
{ path: 'list/:id', component: ItemDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

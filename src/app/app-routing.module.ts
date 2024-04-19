import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListAgentsComponent} from "./features/agents/list-agents/list-agents.component";
import {ErrorPageComponent} from "./features/error.page/error.page.component";
import {HomeComponent} from "./features/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'liste-agents',
    loadChildren: () => import('./features/agents/agents.module').then( m => m.AgentsModule),
  },
  {
    path:"**",
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

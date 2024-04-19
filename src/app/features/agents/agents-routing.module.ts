import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListAgentsComponent} from "./list-agents/list-agents.component";
import {CreateUpdateAgentComponent} from "./create-update-agent/create-update-agent.component";

const routes: Routes = [
  {
    path: '',
    component: ListAgentsComponent,
  },
  {
    path: 'create',
    component: CreateUpdateAgentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsRoutingModule { }

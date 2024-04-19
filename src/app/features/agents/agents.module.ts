import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListAgentsComponent} from "./list-agents/list-agents.component";
import {AgentsRoutingModule} from "./agents-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateUpdateAgentComponent } from './create-update-agent/create-update-agent.component';



@NgModule({
  declarations: [
    ListAgentsComponent,
    CreateUpdateAgentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgentsRoutingModule,
  ]
})
export class AgentsModule { }

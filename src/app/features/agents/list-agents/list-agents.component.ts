import {Component, OnDestroy, OnInit} from '@angular/core';
import {Agent} from "../../../../models/agent.model";
import {AgentService} from "../../../services/agent.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.scss']
})
export class ListAgentsComponent implements OnInit {
  agent: Agent = {};
  agents: Agent[] = [];
  agents$!: Observable<Agent[]>;
  username!: string | number;

  constructor(
    private agentService: AgentService,
  ) {
  }

  ngOnInit(): void {
    this.agent = new Agent();
    this.agents$ = this.agentService.agents$;
    // this.getAgents();
  }

  // Get List of Agents
  getAgents(): void {
    this.agentService.getAgents().subscribe({
      next: response => {
        this.agents = response.body as Agent[];
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    });
  }
}

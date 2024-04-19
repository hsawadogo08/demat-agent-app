import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Agent} from "../../../../models/agent.model";
import {AgentService} from "../../../services/agent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-update-agent',
  templateUrl: './create-update-agent.component.html',
  styleUrls: ['./create-update-agent.component.scss']
})
export class CreateUpdateAgentComponent implements OnInit {
  formAgent!: FormGroup;
  agent!: Agent;
  constructor(
    private fb: FormBuilder,
    private agentService: AgentService,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.agent = new Agent();
    this.initFormGroup();
  }

  initFormGroup(): void {
    this.formAgent = this.fb.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      email: [null],
      tels: [null],
      salary: [null, [Validators.required, Validators.min(100000)]],
      dateNaissance: [null, [Validators.required]],
      dateIntegration: [null, [Validators.required]],
    });
  }


  // Get form data
  onGetAgentInfos() {
    this.agent = this.formAgent.getRawValue() as Agent;
    if (!this.agent.id) {
      this.createAgent();
    } else {
      // Update
      this.updateAgent();
    }
  }


  // Create a new Agent
  createAgent(): void {
    this.agentService.create(this.agent).subscribe({
      next: response => {
        console.log(response.body);
        if (response.body !== null) {
          this.router.navigate(['/liste-agents']);
        }
      },
      error: err => {

      }
    });
  }

  updateAgent(): void {
    this.agentService.update(this.agent).subscribe({
      next: response => {
        console.log(response.body);
      },
      error: err => {

      }
    });
  }
}

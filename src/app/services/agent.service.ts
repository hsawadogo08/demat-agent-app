import { Injectable } from '@angular/core';
import {Agent} from "../../models/agent.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  baseUrl = 'http://192.168.141.201:8383';
  agents$: BehaviorSubject<Agent[]> = new BehaviorSubject<Agent[]>([]);

  constructor(
    private http: HttpClient,
  ) {
    this.getAgents().subscribe({
      next: response => {
        this.agents$.next(response.body as Agent[]);
      }
    });
  }

  public getAgents(): Observable<HttpResponse<Agent[]>> {
    return this.http.get<Agent[]>(`${this.baseUrl}/api/personnels`, { observe: "response"});
  }

  public create(agent: Agent): Observable<HttpResponse<Agent>> {
    return this.http.post<Agent>(`${this.baseUrl}/api/personnels`, agent, { observe: "response"});
  }

  public update(agent: Agent): Observable<HttpResponse<Agent>> {
    return this.http.put<Agent>(`${this.baseUrl}/api/personnels`, agent, { observe: "response"});
  }

  public delete(agent: Agent): void {

  }


}

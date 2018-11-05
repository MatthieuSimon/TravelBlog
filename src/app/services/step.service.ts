import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StepService {
  private baseUrl: string = "../assets/step.json";

  constructor(private readonly http: HttpClient) {}

  public getSteps() {
    return this.http.get(this.baseUrl);
  }

}

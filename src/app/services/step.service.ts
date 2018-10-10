import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class StepService {
  private baseUrl: string = "../assets/step.json";
  private baseUrl2: string = "https://pyistd7wf2.execute-api.eu-west-3.amazonaws.com/api/steps";

  constructor(private readonly http: HttpClient) {}

  public getSteps() {
    this.http.get<any>(this.baseUrl2).pipe(map(data => data.Items)).subscribe(data => {
      console.log("from dynamo");
      console.log(data);
    });
    return this.http.get<any>(this.baseUrl2).pipe(map(data => data.Items));
  }

}

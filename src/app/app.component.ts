import { Component } from '@angular/core';
import { StepService } from './services/step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  steps: any = [];

  constructor(public stepService: StepService) {
    this.stepService.getSteps().subscribe(data =>{
      this.steps = data;
      console.log(data);
    });
  }

}


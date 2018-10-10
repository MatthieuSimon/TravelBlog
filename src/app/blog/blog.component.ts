import { Component } from "@angular/core";
import { StepService } from "../services/step.service";

@Component({
  selector: "blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent {

  constructor(public stepService: StepService) {}
}

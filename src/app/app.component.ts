import {
  Component,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  state = 1;

  changeState(e) {
    const x = e.offsetX;
    const unitArea = Math.ceil(e.target.clientWidth / 3);
    if (x <= unitArea) {
      this.state = 0;
    } else if (x > unitArea && x < 2 * unitArea) {
      this.state = 1;
    } else {
      this.state = 2;
    }
  }
}

import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LinkComponent } from "./link/link.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, LinkComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "picsum";
}

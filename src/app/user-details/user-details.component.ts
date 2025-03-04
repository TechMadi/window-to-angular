import { Component, input } from "@angular/core";
import { IUser } from "../@shared/interfaces/user";

@Component({
	selector: "app-user-details",
	standalone: true,
	imports: [],
	templateUrl: "./user-details.component.html",
	styleUrl: "./user-details.component.scss",
})
export class UserDetailsComponent {
	userDetails = input<IUser>();
}

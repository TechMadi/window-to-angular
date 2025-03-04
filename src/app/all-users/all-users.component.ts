import { Component, inject, OnInit } from "@angular/core";
import { UserService } from "../@shared/services/user/user.service";
import { UserDetailsComponent } from "../user-details/user-details.component";
import { IUser } from "../@shared/interfaces/user";
import { Router } from "@angular/router";

@Component({
	selector: "app-all-users",
	standalone: true,
	imports: [UserDetailsComponent],
	templateUrl: "./all-users.component.html",
	styleUrl: "./all-users.component.scss",
})
export class AllUsersComponent implements OnInit {
	users: IUser[] = [];
	userService = inject(UserService);
	router = inject(Router);
	ngOnInit(): void {
		this.fetchAllUsers();
	}

	fetchAllUsers() {
		this.userService.getAllUsers().subscribe({
			next: (res) => {
				this.users = res;
			},
			error: (err) => {},

			complete: () => {
				console.log("Yes , I am fake senior");
			},
		});
	}

	viewDetails(userId: number) {
		this.router.navigate([`${userId}`]);
	}
}

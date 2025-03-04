import { Routes } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

/**
 * path:where are you going
 * component: what am i showing
 */
export const routes: Routes = [
	{
		path: "",
		component: AllUsersComponent,
	},
	{
		path: ":id",
		component: UserDetailsComponent,
	},
	{
		path: "**",
		component: PageNotFoundComponent,
	},
];

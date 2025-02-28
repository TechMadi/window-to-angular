import { Routes } from "@angular/router";
import { PictureComponent } from "./picture/picture.component";
import { OnionsComponent } from "./onions/onions.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

/**
 * path:where are you going
 * component: what am i showing
 */
export const routes: Routes = [
	{
		path: "",
		redirectTo: "onions",
		pathMatch: "full",
	},
	{
		path: "picture",
		component: PictureComponent,
	},
	{
		path: "onions",
		component: OnionsComponent,
	},
	{
		path: "**",
		component: PageNotFoundComponent,
	},
];

import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../../interfaces/user";

@Injectable({
	providedIn: "root",
})
export class UserService {
	private baseUrl: string = "https://jsonplaceholder.typicode.com/users";
	private http = inject(HttpClient);
	/**
	 * 	Observable
	 *  get , post , patch , put, delete
	 */
	constructor() {}

	// getAllUsers(): string[] {
	// 	return ["Hey"];
	// }

	getAllUsers(): Observable<IUser[]> {
		return this.http.get<IUser[]>(`${this.baseUrl}`);
	}
}

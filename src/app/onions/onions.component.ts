import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-onions",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./onions.component.html",
	styleUrl: "./onions.component.scss",
})
export class OnionsComponent implements OnInit {
	status: "In Progress" | "Complete" | "Todo" = "Todo";
	peoples: string[] = ["John", "Emmanuel", "Simon"];
	ngOnInit(): void {
		setTimeout(() => {
			this.status = "Complete";
		}, 2000);
	}
}

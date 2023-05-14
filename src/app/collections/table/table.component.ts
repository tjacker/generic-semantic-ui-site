import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@Input() public data: { name: string; age: number; job: string }[];
	@Input() public headers: { key: string; label: string }[];
	@Input() public classList: string;
}

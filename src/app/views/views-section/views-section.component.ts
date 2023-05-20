import { Component } from '@angular/core';

@Component({
	selector: 'app-views-section',
	templateUrl: './views-section.component.html',
	styleUrls: ['./views-section.component.scss'],
})
export class ViewsSectionComponent {
	public stats = [
		{ value: 22, label: 'users' },
		{ value: 9000, label: 'revenue', currency: true },
		{ value: 50, label: 'reviews' },
	];
}

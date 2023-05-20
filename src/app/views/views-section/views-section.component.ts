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

	public items = [
		{
			image: '/assets/images/couch.jpeg',
			title: 'Couch',
			description: 'This is a very comfortable couch in like new condition.',
		},
		{
			image: '/assets/images/dresser.jpeg',
			title: 'Dresser',
			description: 'Dress has a few minor scratches but otherwise is in very good condition.',
		},
	];
}

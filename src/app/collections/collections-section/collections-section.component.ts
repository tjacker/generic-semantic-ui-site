import { Component } from '@angular/core';

@Component({
	selector: 'app-collections-section',
	templateUrl: './collections-section.component.html',
	styleUrls: ['./collections-section.component.scss'],
})
export class CollectionsSectionComponent {
	public data = [
		{ name: 'James', age: 34, job: 'Designer' },
		{ name: 'Jill', age: 29, job: 'Engineer' },
		{ name: 'Erin', age: 39, job: 'Developer' },
	];
	public headers = [
		{ key: 'name', label: 'Name' },
		{ key: 'age', label: 'Age' },
		{ key: 'job', label: 'Job' },
	];
}

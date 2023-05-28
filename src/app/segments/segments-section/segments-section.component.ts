import { Component } from '@angular/core';

@Component({
	selector: 'app-segments-section',
	templateUrl: './segments-section.component.html',
	styleUrls: ['./segments-section.component.scss'],
})
export class SegmentsSectionComponent {
	public openModal = false;
	public accordionItems = [
		{
			title: 'What is Angular?',
			content:
				'Angular is an open-source framework developed by Google for building web applications.',
		},
		{
			title: 'What are the key features of Angular?',
			content:
				'Angular offers two-way data binding, a component-based architecture, and dependency injection as its key features.',
		},
		{
			title: 'How does Angular differ from its predecessor?',
			content:
				'Angular is a complete rewrite of the framework with architectural improvements, improved performance, and it is built with TypeScript instead of JavaScript.',
		},
	];

	public onOpen(): void {
		this.openModal = true;
	}

	public onClose(): void {
		this.openModal = false;
	}
}

import { Component } from '@angular/core';

@Component({
	selector: 'app-segments-section',
	templateUrl: './segments-section.component.html',
	styleUrls: ['./segments-section.component.scss'],
})
export class SegmentsSectionComponent {
	public openModal = false;

	public onOpen(): void {
		this.openModal = true;
	}

	public onClose(): void {
		this.openModal = false;
	}
}

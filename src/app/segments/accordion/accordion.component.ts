import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
	@Input() public accordionItems: { title: string; content: string }[];

	public openedItemIndex = 0;

	public onClick(index: number): void {
		if (index === this.openedItemIndex) {
			this.openedItemIndex = -1;
		} else {
			this.openedItemIndex = index;
		}
	}
}

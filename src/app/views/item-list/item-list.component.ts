import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
	@Input() public items: { image: string; title: string; description: string }[];
}

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
	@Input() public stats: { value: number; label: string; currency?: boolean }[];
}

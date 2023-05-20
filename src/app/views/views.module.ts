import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsSectionComponent } from './views-section/views-section.component';

@NgModule({
	declarations: [ViewsSectionComponent, StatisticsComponent],
	imports: [CommonModule, ViewsRoutingModule, SharedModule],
	exports: [],
})
export class ViewsModule {}

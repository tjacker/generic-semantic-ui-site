import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SegmentsRoutingModule } from './segments-routing.module';
import { SegmentsSectionComponent } from './segments-section/segments-section.component';

@NgModule({
	declarations: [SegmentsSectionComponent],
	imports: [CommonModule, SegmentsRoutingModule],
	exports: [],
})
export class SegmentsModule {}

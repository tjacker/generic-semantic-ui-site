import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { SegmentsRoutingModule } from './segments-routing.module';
import { SegmentsSectionComponent } from './segments-section/segments-section.component';

@NgModule({
	declarations: [SegmentsSectionComponent, ModalComponent, AccordionComponent],
	imports: [CommonModule, SegmentsRoutingModule, SharedModule],
	exports: [],
})
export class SegmentsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsSectionComponent } from './elements-section/elements-section.component';

@NgModule({
	declarations: [ElementsSectionComponent],
	imports: [CommonModule, ElementsRoutingModule],
	exports: [],
})
export class ElementsModule {}

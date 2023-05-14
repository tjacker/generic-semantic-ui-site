import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsSectionComponent } from './elements-section/elements-section.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';

@NgModule({
	declarations: [ElementsSectionComponent, PlaceholderComponent, TimesDirective],
	imports: [CommonModule, ElementsRoutingModule, SharedModule],
	exports: [],
})
export class ElementsModule {}

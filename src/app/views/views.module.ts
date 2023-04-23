import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsSectionComponent } from './views-section/views-section.component';

@NgModule({
	declarations: [ViewsSectionComponent],
	imports: [CommonModule, ViewsRoutingModule],
	exports: [ViewsSectionComponent],
})
export class ViewsModule {}

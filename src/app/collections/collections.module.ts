import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsSectionComponent } from './collections-section/collections-section.component';

@NgModule({
	declarations: [CollectionsSectionComponent],
	imports: [CommonModule, CollectionsRoutingModule],
	exports: [CollectionsSectionComponent],
})
export class CollectionsModule {}

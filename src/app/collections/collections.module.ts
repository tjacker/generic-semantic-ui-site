import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsSectionComponent } from './collections-section/collections-section.component';
import { TableComponent } from './table/table.component';

@NgModule({
	declarations: [CollectionsSectionComponent, TableComponent],
	imports: [CommonModule, CollectionsRoutingModule, SharedModule],
	exports: [],
})
export class CollectionsModule {}

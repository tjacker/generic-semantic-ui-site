import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsSectionComponent } from './collections-section/collections-section.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
	declarations: [
		CollectionsSectionComponent,
		TableComponent,
		BiographyComponent,
		CompaniesComponent,
		PartnersComponent,
		TabsComponent,
	],
	imports: [CommonModule, CollectionsRoutingModule, SharedModule],
	exports: [],
})
export class CollectionsModule {}

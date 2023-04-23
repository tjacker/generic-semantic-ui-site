import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsSectionComponent } from './collections-section/collections-section.component';

const routes: Routes = [{ path: 'collections', component: CollectionsSectionComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CollectionsRoutingModule {}

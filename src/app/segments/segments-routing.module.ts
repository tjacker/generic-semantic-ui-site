import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentsSectionComponent } from './segments-section/segments-section.component';

const routes: Routes = [{ path: 'segments', component: SegmentsSectionComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SegmentsRoutingModule {}

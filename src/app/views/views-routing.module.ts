import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsSectionComponent } from './views-section/views-section.component';

const routes: Routes = [{ path: '', component: ViewsSectionComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ViewsRoutingModule {}

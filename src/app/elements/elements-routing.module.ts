import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsSectionComponent } from './elements-section/elements-section.component';

const routes: Routes = [{ path: 'elements', component: ElementsSectionComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ElementsRoutingModule {}

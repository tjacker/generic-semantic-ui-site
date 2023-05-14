import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'elements',
		loadChildren: () => import('./elements/elements.module').then((m) => m.ElementsModule),
	},
	{
		path: 'collections',
		loadChildren: () => import('./collections/collections.module').then((m) => m.CollectionsModule),
	},
	{
		path: 'views',
		loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule),
	},
	{
		path: 'segments',
		loadChildren: () => import('./segments/segments.module').then((m) => m.SegmentsModule),
	},
	{ path: '', redirectTo: 'elements', pathMatch: 'full' },
	{ path: '**', redirectTo: 'elements' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

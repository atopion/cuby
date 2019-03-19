import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PicyPage } from './picy.page';
import { ImageOverlayModule } from '../additions/overlay/image-overlay.module';

const routes: Routes = [
	{
		path: '',
		component: PicyPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ImageOverlayModule,
		RouterModule.forChild(routes)
	],
	declarations: [PicyPage]
})
export class PicyPageModule {}

import { NgModule } from '@angular/core';
import { PlaceComponent } from './place/place';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [PlaceComponent],
	imports: [IonicModule],
	exports: [PlaceComponent]
})
export class ComponentsModule {}

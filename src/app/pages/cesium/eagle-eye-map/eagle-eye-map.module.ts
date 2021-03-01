import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagleEyeMapRoutingModule } from './eagle-eye-map-routing.module';
import { EagleEyeMapComponent } from './eagle-eye-map.component';
import {EagleEyeMapService} from './eagle-eye-map.service';


@NgModule({
  declarations: [EagleEyeMapComponent],
  imports: [
    CommonModule,
    EagleEyeMapRoutingModule
  ],
})
export class EagleEyeMapModule { }
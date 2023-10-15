import { NgModule } from '@angular/core';


import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { NzCardModule } from 'ng-zorro-antd/card';
import { WelcomeComponent } from './welcome.component';
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {CommonModule} from "@angular/common";
import {BrPipe} from "./BrPipe";


@NgModule({
  imports: [WelcomeRoutingModule, NzPaginationModule,NzCardModule,NzImageModule,NzGridModule, CommonModule],
  declarations: [WelcomeComponent, BrPipe],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

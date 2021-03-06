import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { NavRoutingModule } from './nav-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeModule } from '../home/home.module';




@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, NavRoutingModule,
    FlexLayoutModule,
    MatSidenavModule
  ],exports:[NavComponent]
})
export class NavModule { }

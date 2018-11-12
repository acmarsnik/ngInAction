import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from './../list/list.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ListModule,
    MatCardModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }

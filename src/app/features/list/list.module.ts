import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRoutingModule} from './list-routing.module';
import {ListComponent} from './list.component';
import {MatListModule} from '@angular/material';
import {ComponentsModule} from '../../components/components.module';
import { ListItemComponent } from '../../components/list-item/list-item.component';
import { FilterUserPipe } from '../../filter-user.pipe';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule,
    ComponentsModule
  ],
  declarations: [
    ListComponent, ListItemComponent, FilterUserPipe],
  exports: [ListComponent]
})
export class ListModule {
}

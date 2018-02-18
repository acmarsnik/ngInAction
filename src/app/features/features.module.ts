import {ComponentsModule} from './../components/components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainModule} from './main/main.module';
import {ListModule} from './list/list.module';
import {ChatModule} from './chat/chat.module';
import {LoginModule} from './login/login.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    ListModule,
    ChatModule,
    LoginModule,
    ComponentsModule
  ]
})
export class FeaturesModule { }

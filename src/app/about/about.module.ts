import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { About } from './about.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    About
  ],
  exports: [
    About
  ]
})
export class AboutModule {}

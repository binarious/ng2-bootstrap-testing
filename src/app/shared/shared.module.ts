import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2BootstrapModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    Ng2BootstrapModule
  ]
})
export class SharedModule {}

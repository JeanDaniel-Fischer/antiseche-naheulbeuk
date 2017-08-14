import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SheetComponent],
  declarations: [SheetComponent]
})
export class SortModule { }

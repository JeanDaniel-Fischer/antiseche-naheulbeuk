import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { FormsModule } from '@angular/forms';
import { CastComponent } from './cast/cast.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SheetComponent],
  declarations: [SheetComponent, CastComponent]
})
export class SortModule { }

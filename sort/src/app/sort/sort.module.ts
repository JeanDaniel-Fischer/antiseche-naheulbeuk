import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { FormsModule } from '@angular/forms';
import { CastComponent } from './cast/cast.component';
import { AdathieService } from './adathie.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AdathieService],
  exports: [SheetComponent],
  declarations: [SheetComponent, CastComponent]
})
export class SortModule { }

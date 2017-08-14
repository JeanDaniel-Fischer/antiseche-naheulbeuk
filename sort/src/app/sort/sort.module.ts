import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { FormsModule } from '@angular/forms';
import { CastComponent } from './cast/cast.component';
import { AdathieService } from './adathie.service';
import { SheetFlowComponent } from './sheet-flow/sheet-flow.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AdathieService],
  exports: [SheetComponent, SheetFlowComponent],
  declarations: [SheetComponent, CastComponent, SheetFlowComponent]
})
export class SortModule { }

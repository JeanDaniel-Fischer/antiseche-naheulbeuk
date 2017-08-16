import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { FormsModule } from '@angular/forms';
import { CastComponent } from './cast/cast.component';
import { SpellBookService } from './spell-book.service';
import { SheetFlowComponent } from './sheet-flow/sheet-flow.component';
import { CaptionComponent } from './caption/caption.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [SpellBookService],
  exports: [SheetComponent, SheetFlowComponent],
  declarations: [SheetComponent, CastComponent, SheetFlowComponent, CaptionComponent]
})
export class SortModule { }

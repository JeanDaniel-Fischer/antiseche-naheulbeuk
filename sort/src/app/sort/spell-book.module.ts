import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { FormsModule } from '@angular/forms';
import { SpellComponent } from './spell/spell.component';
import { SpellBookService } from './spell-book.service';
import { SheetFlowComponent } from './sheet-flow/sheet-flow.component';
import { CaptionComponent } from './caption/caption.component';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  providers: [SpellBookService],
  exports: [SheetComponent, SheetFlowComponent],
  declarations: [SheetComponent, SpellComponent, SheetFlowComponent, CaptionComponent]
})
export class SpellBookModule { }

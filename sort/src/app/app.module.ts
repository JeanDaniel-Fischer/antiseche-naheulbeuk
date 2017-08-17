import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';
import { SortModule } from './sort/sort.module';
import { SheetFlowComponent } from './sort/sheet-flow/sheet-flow.component';
import { SheetComponent } from './sort/sheet/sheet.component';

const appRoutes: Routes = [
  { path: 'par-categorie/:book', component: SheetComponent },
  { path: 'par-niveau/:book',      component: SheetFlowComponent },
  { path: '',
    redirectTo: '/par-categorie/adathie',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/par-categorie/adathie' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SortModule,
    TranslateModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

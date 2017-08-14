import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SortModule } from './sort/sort.module';
import { SheetFlowComponent } from './sort/sheet-flow/sheet-flow.component';
import { SheetComponent } from './sort/sheet/sheet.component';

const appRoutes: Routes = [
  { path: 'adathie', component: SheetComponent },
  { path: 'adathie-flow',      component: SheetFlowComponent },
  { path: '',
    redirectTo: '/adathie',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/adathie' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SortModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

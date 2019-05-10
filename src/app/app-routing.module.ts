import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuzzComponent} from "./buzz/buzz.component";

const routes: Routes = [
   {
      path: '',
      component: BuzzComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteTableComponent } from './infinite-table.component';

const routes: Routes = [{ path: '', component: InfiniteTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteTableRoutingModule { }

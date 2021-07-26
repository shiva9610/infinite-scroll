import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteTableRoutingModule } from './infinite-table-routing.module';
import { InfiniteTableComponent } from './infinite-table.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [InfiniteTableComponent],
  imports: [CommonModule, InfiniteTableRoutingModule, InfiniteScrollModule],
})
export class InfiniteTableModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinnersComponent } from './winners.component';

const routes: Routes = [{ path: '', component: WinnersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinnersRoutingModule {}

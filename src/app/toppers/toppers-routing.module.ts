import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppersComponent } from './toppers.component';

const routes: Routes = [{ path: '', component: ToppersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToppersRoutingModule {}

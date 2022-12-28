import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppersComponent } from './toppers/toppers.component';
import { UsersComponent } from './users/users.component';
import { WinnersComponent } from './winners/winners.component';

const routes: Routes = [
  {
    path: '', loadComponent: () =>
      import('./users/users.component').then(
        (m) => m.UsersComponent
      )
  },
  {
    path: 'winners', loadComponent: () =>
      import('./winners/winners.component').then(
        (m) => m.WinnersComponent
      )
  },
  {
    path: 'toppers', loadComponent: () =>
      import('./toppers/toppers.component').then(
        (m) => m.ToppersComponent
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

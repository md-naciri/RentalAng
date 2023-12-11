import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    // loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '', component: BodyComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }

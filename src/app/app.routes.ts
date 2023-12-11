import { Routes } from '@angular/router';
import { DemandComponent } from './modules/layout/components/demand/demand.component';
// import { UserTableComponent } from './components/dashboard/user-table/user-table.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { BodyComponent } from './components/body/body.component';
// import { ReservationComponent } from './components/reservation/reservation.component';

// import { ModelEquipmentComponent } from './components/model-equipment/model-equipment.component';
// import { FamilyComponent } from './components/family/family.component';
// import { SigninComponent } from './components/auth/pages/signin/signin.component';
// import { SignupComponent } from './components/auth/pages/signup/signup.component';

export const routes: Routes = [
      { path: 'demand', component: DemandComponent },
      {
            path: '',
            loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
      },
      {
            path: 'auth',
            loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
      { path: '**', redirectTo: 'error/404' },
      // { path: '', component: BodyComponent },
      // { path: 'users', component: UserTableComponent },
      // { path: 'family/:name', component: ModelEquipmentComponent },
      // { path: 'family', component: ModelEquipmentComponent },
      // { path: 'Families', component: FamilyComponent },
      // { path: 'reservation', component: ReservationComponent },
      // { path: 'signin', component: SigninComponent },
      // { path: 'signup', component: SignupComponent },
      // { path: '**', component: PageNotFoundComponent },
];

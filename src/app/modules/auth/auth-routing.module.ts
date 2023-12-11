import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
// import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
// import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
// import { TwoStepsComponent } from './pages/two-steps/two-steps.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SigninComponent, data: { returnUrl: window.location.pathname } },
      { path: 'sign-up', component: SignupComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'new-password', component: NewPasswordComponent },
      // { path: 'two-steps', component: TwoStepsComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

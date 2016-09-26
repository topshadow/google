import { Routes } from '@angular/router';
import { SignIn } from './sign-in';
import { EveryPage } from './page';
export const BS_APP_ROUTES: Routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignIn },
    { path: ':path', component: EveryPage, pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AuthGardService} from "./services/auth/auth-gard.service";
import {RoleGuardService} from "./services/auth/role-guard.service";
import {UserPageComponent} from "./user-page/user-page.component";
import {LoginComponent} from "./login/login.component";
import {ChartsDataComponent} from "./admin-dashboard/charts-data/charts-data.component";
import {ModulesComponent} from "./admin-dashboard/modules/modules.component";
import {EnseignantesComponent} from "./admin-dashboard/enseignantes/enseignantes.component";
import {FilieresComponent} from "./admin-dashboard/filieres/filieres.component";
import {ProfileComponent} from "./admin-dashboard/profile/profile.component";
import { InterventionsComponent } from './admin-dashboard/interventions/interventions.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGardService, RoleGuardService],
    data: { allowedRoles: ['ADMIN'] },
    children:[
      {
        path: '',
        redirectTo: 'charts',
        pathMatch: 'full'
      },
      {
        path: "charts",
        component: ChartsDataComponent,
      },
      {
        path: 'filieres',
        component: FilieresComponent,
      },
      {
        path: 'modules',
        component: ModulesComponent,
      },
      {
        path : 'enseignants',
        component: EnseignantesComponent
      },
      {
        path : 'interventions',
        component: InterventionsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {path: 'user-page', component: UserPageComponent, canActivate: [AuthGardService, RoleGuardService], data: { allowedRoles: ['ENSEIGNANT', 'ADMIN'] }},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page if no route matches
  { path: '**', redirectTo: '/login' }, // Redirect to login page if no route matches
];

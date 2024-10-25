import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'bpiapp',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'getrequiarements',
        loadComponent: () =>
          import(
            './presentation/pages/getRequiarementsPage/getRequiarementsPage.component'
          ),
        data: {
          icon: 'fa-solid fa-robot',
          title: 'Requerimientos',
          description: 'Obtener los Requerimientos',
        },
      },
      {
        path: 'setdecktests',
        loadComponent: () =>
          import(
            './presentation/pages/setDeckTestsPage/setDeckTestsPage.component'
          ),
        data: {
          icon: 'fa-solid fa-hand-peace',
          title: 'Deck de Pruebas',
          description: 'Generar el Deck de Pruebas',
        },
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

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
    //canActivate: [ isAuthenticatedGuard ],
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'getrequiarements',
        canActivate: [ isAuthenticatedGuard ],
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
        canActivate: [ isAuthenticatedGuard ],
        loadComponent: () =>
          import(
            './presentation/pages/setDeckTestsPage/setDeckTestsPage.component'
          ),
        data: {
          icon: 'fa-solid fa-hand-peace',
          title: 'Deck de Pruebas',
          description: 'Generar el Deck de Pruebas',
        },
      },
      {
        path: 'orthography',
        canActivate: [ isAuthenticatedGuard ],
        loadComponent: () =>
          import(
            './presentation/pages/orthographyPage/orthographyPage.component'
          ),
        data: {
          icon: 'fa-solid fa-spell-check',
          title: 'Ortografia',
          description: 'Revisar ortografia de textos',
        },
      },
      {
        path: 'mefia-chat',
        canActivate: [ isAuthenticatedGuard ],
        loadComponent: () =>
          import(
            './presentation/pages/qaChatPage/qaChatPage.component'
          ),
        data: {
          icon: 'fa-solid fa-comments',
          title: 'mefia-chat',
          description: 'Consultas sobre productos de inversión',
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

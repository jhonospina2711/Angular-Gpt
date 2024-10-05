import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';

export const routes: Routes = [
  {
    path: '',
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
      },
      {
        path: 'pros-cons',
        loadComponent: () =>
          import('./presentation/pages/prosConsPage/prosConsPage.component'),
        data: {
          icon: 'fa-solid fa-code-compare',
          title: 'Pros & Cons',
          description: 'Comparar pros y contras',
        },
      },
      {
        path: 'pros-cons-stream',
        loadComponent: () =>
          import(
            './presentation/pages/prosConsStreamPage/prosConsStream.component'
          ),
        data: {
          icon: 'fa-solid fa-water',
          title: 'Como stream',
          description: 'Con stream de mensajes',
        },
      },
      {
        path: '**',
        redirectTo: 'getrequiarements',
        pathMatch: 'full',
      },
    ],
  },
];

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
        path: 'orthography',
        loadComponent: () =>
          import(
            './presentation/pages/orthographyPage/orthographyPage.component'
          ),
        data: {
          icon: 'fa-solid fa-spell-check',
          title: 'Ortografía',
          description: 'Corregir ortografía',
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

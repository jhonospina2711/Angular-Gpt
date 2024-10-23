import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: '**',
    //guards
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

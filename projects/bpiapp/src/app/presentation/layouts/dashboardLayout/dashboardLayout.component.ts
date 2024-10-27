import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarMenuItemComponent } from '@components/sidebarMenuItem/sidebarMenuItem.component';
//import { routes } from '../../../app-routing.module';
import { routes } from '../../../app.routes';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarMenuItemComponent
  ],
  templateUrl: './dashboardLayout.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  private authService = inject( AuthService);
  //public user = computed( () => this.authService.currentUser() );
  public routes = routes[2].children?.filter( (route) => route.data)

  onLogout() {
    this.authService.logout();
  }
 }

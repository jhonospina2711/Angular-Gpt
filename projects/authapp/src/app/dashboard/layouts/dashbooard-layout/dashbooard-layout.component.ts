import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  templateUrl: './dashbooard-layout.component.html',
  styleUrl: './dashbooard-layout.component.css'
})
export class DashbooardLayoutComponent {
  private authService = inject( AuthService);

  public user = computed( () => this.authService.currentUser());
  // get user() {
  //   return this.authService.currentUser();
  // }
}

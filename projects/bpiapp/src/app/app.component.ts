import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularGpt';

   private authService = inject( AuthService);
   private router      = inject (Router);

  public finisheAuthdCheck = computed<boolean>( () => {
    if (this.authService.authStatus() == AuthStatus.checking){
      return false;
    }
      return true;
  });

  public AuthStatusChangedEffect = effect( () => {
    switch( this.authService.authStatus()){
      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dasboard');
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login')
        return;
    }
  });

}

import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet, UrlTree } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { CommonModule } from '@angular/common';
import { TypingLoaderComponent } from '@components/typingLoader/typingLoader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TypingLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'angularGpt';

   private authService = inject( AuthService);
   private router      = inject (Router);
   private url: UrlTree;

   constructor() {
    const storedUrl = localStorage.getItem('url');
    this.url = storedUrl ? this.router.parseUrl(storedUrl) : this.router.createUrlTree(['/bpiapp/getrequiarements']);
  }

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
        this.router.navigateByUrl(this.url);

        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login')
        return;
    }
  });

}

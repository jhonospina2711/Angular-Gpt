import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
//import { AuthService } from '@auth-services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

    private fb            = inject( FormBuilder );
    private authService   = inject( AuthService);
    private router        = inject( Router);
    private url           = '/bpiapp/getrequiarements';

    //! myForm permite validar la estructura del email y el password;
    public myForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    login() {
      const { email, password } = this.myForm.value;
      this.authService.login( email, password )
       .subscribe({
        next: () => {
          this.router.navigateByUrl(this.url)
          localStorage.setItem('url', this.url);
        },
        error: ( message ) => {
          Swal.fire('Error', message, 'error')
        }
       });
    }
}

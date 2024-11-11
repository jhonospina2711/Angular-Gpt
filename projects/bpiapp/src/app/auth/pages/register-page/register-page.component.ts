import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router        = inject( Router);
  private url           = '/auth/login';

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required]],
  });

  register() {
    const { email, password, name } = this.myForm.value;
    this.authService.register(email, password, name)
      .subscribe({
        next: () => {
          Swal.fire({
            title: "Usuario Registrado!",
            text: "Ir a Login",
            icon: "success"
          });
          this.router.navigateByUrl(this.url)
        },
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      });
  }

}

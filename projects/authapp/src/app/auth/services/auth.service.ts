import { computed, inject, Injectable, signal } from '@angular/core';
import { enviroment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AuthStatus, LoginResponse, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = enviroment.baseurl;
  private http = inject( HttpClient);

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  //! Esto permite exponer al mundo exterior los valores de mi signal, sin comprometer la información
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() { }

  login( email: string, password: string ): Observable<boolean>{

    const url = `${ this.baseUrl }/auth/login`;
    const body = { email: email, password };

    return this.http.post<LoginResponse>( url, body )
    .pipe(
      tap( ({ user, token }) => {
        this._currentUser.set( user );
        this._authStatus.set( AuthStatus.authenticated);
        //! Almaceno el token en el lcalstorage
        localStorage.setItem('token', token );
        console.log({user, token});
      }),
      map( () => true ),

      //Todo: Errores
      //! Aqui atrapamos el error de login
      catchError( err => throwError( () => err.error.message )

      )
    );

  }
}

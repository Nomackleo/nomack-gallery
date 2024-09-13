import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Auth,
  AuthError,
  authState,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
} from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthErrorsMessagesService } from './auth-errors-messages.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private firestore = inject(Firestore);
  private auth: Auth = inject(Auth);
  private authErrorsMessages = inject(AuthErrorsMessagesService);

  // Authentication Providers
  private providerGoogle = new GoogleAuthProvider();
  private providerTwitter = new TwitterAuthProvider();
  private providerGithub = new GithubAuthProvider();
  private providerFacebook = new FacebookAuthProvider();

  // User signal state
  userSignal = toSignal(
    authState(this.auth).pipe(
      filter((user) => user !== null),
      map((user) => user)
    )
  );

  //Signal for Firebase errors
  authError = signal<string | null>(null);

  private storeAuthError(error: AuthError | undefined) {
    this.authError.set(this.authErrorsMessages.getErrorMessage(error));
  }

  // Verify Athentication
  getGoogleAuth() {
    getRedirectResult(this.auth).then((result) => {
      if (!result) return;

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log(token, user);

      this.router.navigate(['/gallery']);
    });
  }
  // Authentication Methods
  async loginGooglePopup() {
    try {
      await signInWithPopup(this.auth, this.providerGoogle);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      this.storeAuthError(error as AuthError);
    }
  }

  async loginTwitterPopup() {
    try {
      await signInWithPopup(this.auth, this.providerTwitter);
    } catch (error) {
      console.error('Error al iniciar sesión con Twitter:', error);
      this.storeAuthError(error as AuthError);
    }
  }

  async loginGithubPopup() {
    try {
      await signInWithPopup(this.auth, this.providerGithub);
    } catch (error) {
      console.error('Error al iniciar sesión con Github:', error);
      this.storeAuthError(error as AuthError);
    }
  }

  async loginFacebookPopup() {
    try {
      await signInWithPopup(this.auth, this.providerFacebook);
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
      this.storeAuthError(error as AuthError);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Error al iniciar sesión con correo electrónico:', error);
      this.storeAuthError(error as AuthError);
    }
  }

  async signUpWithEmailAndPassword(
    email: string,
    password: string,
    confirmPassword: string
  ) {
    if (password !== confirmPassword) {
      // TODO: Message
      return;
    }

    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      this.storeAuthError(error as AuthError);
    }
  }

  async verificationEmail() {
    try {
      await sendEmailVerification(this.auth.currentUser!);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al enviar correo de verificación:', error);
      this.storeAuthError(error as AuthError);
    }
  }
}

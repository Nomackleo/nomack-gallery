import { AuthService } from '@/auth/services/auth.service';
import { ValidatorFieldService } from '@/auth/services/validator-field.service';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { getRedirectResult } from '@angular/fire/auth';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <!-- component -->
    <!-- TODO: Dark Mode -->
    <div class="font-sans">
      <div
        class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 "
      >
        <div class="relative sm:max-w-sm w-full shadow-lg">
          <div
            class="card bg-indigo-400 shadow-lg  w-full h-full rounded-3xl absolute  translate-y-1 translate-x-1"
          ></div>
          <div
            class="card bg-purple-400 shadow-lg  w-full h-full rounded-3xl absolute  -translate-y-1 -translate-x-1"
          ></div>
          <div
            class="relative w-full rounded-3xl  px-6 py-4 bg-indigo-100 shadow-md"
          >
            <label
              for=""
              class="block mt-3 text-base text-gray-700 text-center font-semibold"
            >
              Login
            </label>
            <form
              [formGroup]="loginForm"
              method="post"
              action="#"
              class="mt-12"
              (ngSubmit)="login()"
            >
              <!-- email -->
              <!-- TODO: fix the animation label when the form is pristine -->
              <div class="group relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  formControlName="email"
                  class="mt-1 block w-full border-none outline-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-indigo-50 focus:bg-indigo-50
                  pl-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400"
                  required
                />
                @if (loginForm.controls['email'].invalid &&
                (loginForm.controls['email'].dirty ||
                loginForm.controls['email'].touched)) { }
                <label
                  for="email"
                  class="absolute left-2 top-0 flex h-full text-gray-400 transform items-center pl-2 text-base transition-all duration-300
                  group-focus-within:-top-6 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-gray-600
                  peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
                  >email</label
                >
              </div>
              <!-- password -->
              <!-- TODO: fix the animation label when the form is pristine -->
              <div class="group relative mt-9">
                <input
                  type="password"
                  id="password"
                  name="password"
                  formControlName="password"
                  class="mt-1 block w-full border-none outline-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-indigo-50 focus:bg-indigo-50
                  pl-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400"
                />
                <label
                  for="password"
                  class="absolute left-2 top-0 flex h-full text-gray-400 transform items-center pl-2 text-base transition-all duration-300
                  group-focus-within:-top-6 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-gray-600
                  peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
                  >contraseña</label
                >
              </div>
              <div class="mt-7 flex">
                <!-- checkbox -->
                <!-- TODO: Styles for checkbox -->
                <label
                  for="remember_me"
                  class="inline-flex items-center w-full cursor-pointer"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="rounded border-gray-300 text-purple-600 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 checked:bg-teal-500"
                    name="remember"
                  />
                  <span class="ml-2 text-sm text-gray-600"> Recuerdame </span>
                </label>

                <div class="w-full text-right">
                  <a
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    ¿Olvidó su contraseña?
                  </a>
                </div>
              </div>
              <!-- Login Button -->
              <div class="mt-7">
                <button
                  class="bg-indigo-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Login
                </button>
              </div>

              <div class="flex mt-7 items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md" />
                <label class="block font-medium text-sm text-gray-600 w-full">
                  Accede con
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <!-- Login with SocialMedia -->
              <!-- Google -->
              <a
                href="#"
                class="bg-red-400 m-auto mt-5 inline-flex h-12 w-full items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-red-400 hover:bg-red-400 focus:outline-none"
                (click)="loginWithGoogle()"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 262"
                  >
                    <path
                      fill="#4285f4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    />
                    <path
                      fill="#34a853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    />
                    <path
                      fill="#fbbc05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                    />
                    <path
                      fill="#eb4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    />
                  </svg>
                </span>
                <span class="text-sm font-medium text-white">Google</span>
              </a>
              <!-- Twitter -->
              <a
                href="#"
                class="bg-blue-500 border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-full items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none"
                (click)="loginWithTwitter()"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="white"
                      d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209
                      298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
                    />
                  </svg>
                </span>
                <span class="text-sm font-medium text-white">Twitter</span>
              </a>
              <!-- github -->
              <a
                href="#"
                class="bg-black border-white-500 group m-auto my-0 inline-flex h-12 w-full items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none"
                (click)="loginWithGithub()"
              >
                <span>
                  <svg
                    class="h-5 w-5 fill-current text-white"
                    viewBox="0 0 16 16"
                    version="1.1"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="text-white"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
                      1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68
                      0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </span>
                <span class="text-sm font-medium text-white">Github</span>
              </a>
              <div class="mt-7">
                <div class="flex justify-center items-center">
                  <label class="mr-2">¿Eres nuevo?</label>
                  <a
                    href="#"
                    class=" text-indigo-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Crea una cuenta
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private validatorsFieldService = inject(ValidatorFieldService);

  public errorMessage = computed(() => this.authService.authError());

  ngOnInit(): void {
    this.authService.getGoogleAuth();
  }

  public loginForm: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsFieldService.emailPattern),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.validatorsFieldService.passwordPattern),
      ],
    ],
  });

  login() {
    this.authService.loginWithEmailAndPassword(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }

  loginWithGoogle() {
    this.authService.loginGooglePopup();
  }

  loginWithTwitter() {
    this.authService.loginTwitterPopup();
  }

  loginWithGithub() {
    this.authService.loginGithubPopup();
  }
}

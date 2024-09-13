import { routes } from '@/app.routes';
import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'header-gallery',
  standalone: true,
  imports: [],
  template: `
    <!-- TODO: Dark Mode -->
    <header
      class="flex relative items-center justify-center text-center p-4 bg-transparent shadow-md z-50"
    >
      <!-- Menu button for mobile -->
      <div class="flex flex-1 ">
        <button
          class="appearance-none border-none bg-transparent overflow-visible cursor-pointer flex flex-col items-center justify-center gap-1 ml-8 w-10 h-10"
          (click)="toggleMenu()"
          id="menu-button"
        >
          <span
            class="block w-6 h-0.5  rounded-sm transition-all duration-500 ease-in-out"
            [class.bg-gray-900]="!isMenuOpen"
            [class.bg-purple-50]="isMenuOpen"
            [class.rotate-45]="isMenuOpen"
            [class.translate-y-1.5]="isMenuOpen"
          ></span>
          <span
            class="block w-6 h-0.5  rounded-sm transition-all duration-500 ease-in-out"
            [class.bg-gray-900]="!isMenuOpen"
            [class.bg-purple-50]="isMenuOpen"
            [class.scale-x-0]="isMenuOpen"
            [class.oapcity-0]="isMenuOpen"
          ></span>
          <span
            class="block w-6 h-0.5  rounded-sm transition-all duration-500 ease-in-out"
            [class.bg-gray-900]="!isMenuOpen"
            [class.bg-purple-50]="isMenuOpen"
            [class.-rotate-45]="isMenuOpen"
            [class.-translate-y-1.5]="isMenuOpen"
          ></span>
        </button>
      </div>

      <!-- Logo -->
      <a
        href="/"
        class="block no-underline grow-0 mr-8 md:m-0 "
        alt="Logo de Nomackleo"
      >
        <svg
          id="Capa_4"
          data-name="Capa 4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 709.3 507.9"
          width="60"
          class="fill-gray-800 transition-all duration-500 ease-in-out"
        >
          <defs>
            <style>
              .cls-1 {
                fill: #f79f34;
              }

              .cls-1,
              .cls-2,
              .cls-3,
              .cls-4,
              .cls-5 {
                stroke-width: 0px;
              }

              .cls-2 {
                fill: #f7b934;
              }

              .cls-3 {
                fill: #e6c130;
              }

              .cls-4 {
                fill: #4b3077;
              }

              .cls-5 {
                fill: #8522a8;
              }
            </style>
          </defs>
          <path
            class="cls-4"
            d="m354.6,0C186.2,0,44.2,112.9,0,267.1c31.3,108.6,110.5,196.9,215,239.7v-23.7c-73.6-47.2-118.1-128.6-118.1-216C96.9,125.4,211.8,10.5,353.5,10.5s256.7,114.9,256.7,256.6c.1,87.7-44.7,169.3-118.7,216.4v24.5c105.8-42.4,186.2-131.3,217.8-240.9C665.1,112.9,523,0,354.6,0Z"
          />
          <path
            class="cls-5"
            d="m611.1,264.4c-1-140.4-115.8-254-256.2-254.9-159.9,0-261.1,135.8-258.7,254.9,2.9,112.6,63,185.5,118.6,218.6v-218.5c.3-22,5.8-43.7,16.2-63.1h0c35.9-67.3,119.7-92.8,187-56.9,44.4,23.7,72.4,69.7,73.1,120v219.2s.1,0,.1-.1c71.6-45.7,119.9-120.7,119.9-219.2Z"
          />
          <path
            class="cls-3"
            d="m352,263.9l-.2,140.8c-101.5,1.3-170-115.1-120.5-203.3l120.7,62.5Z"
          />
          <path
            class="cls-1"
            d="m491.5,266.5c.1,76.9-62.8,139.1-139.7,138.2l.2-140.8,122.4-63.9c11.3,20.3,17.1,43.2,17.1,66.5Z"
          />
          <path
            class="cls-2"
            d="m474.18,200.27l-122.4,64-120.7-62.5h0c47.9-96,193.9-96.3,243.1-1.5Z"
          />
        </svg>
      </a>

      <!-- user profile -->
      <div class="lg:flex flex-1 justify-end hidden">
        <nav id="nav-profile">
          <ul class="flex items-center list-none m-0 p-0 gap-6">
            <li
              class="relative flex items-center transition-colors duration-500 ease-in-out after:inline-block after:h-1 after:ml-6"
            >
              <a
                href="#"
                [class.text-gray-900]="!isMenuOpen"
                [class.text-purple-50]="isMenuOpen"
                >Login</a
              >
            </li>
            <li
              class="relative flex items-center transition-colors duration-500 ease-in-out after:inline-block after:h-1 after:ml-6"
            >
              <a
                href="#"
                [class.text-gray-900]="!isMenuOpen"
                [class.text-purple-50]="isMenuOpen"
                ><svg
                  [class.fill-gray-900]="!isMenuOpen"
                  [class.fill-purple-50]="isMenuOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 26 26"
                >
                  <path
                    d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12"
                  /></svg
              ></a>
            </li>
            <li
              class="relative flex items-center transition-colors duration-500 ease-in-out"
            >
              <a
                href="#"
                class="mr-8"
                [class.text-gray-900]="!isMenuOpen"
                [class.text-purple-50]="isMenuOpen"
                ><svg
                  [class.fill-gray-900]="!isMenuOpen"
                  [class.fill-purple-50]="isMenuOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.257 2H8.753A6.765 6.765 0 0 0 2 8.75v6.5a6.73 6.73 0 0 0 3.122 5.68a6 6 0 0 0 1.06.56a6.7 6.7 0 0 0 2.561.51h6.504c.9 0 1.791-.18 2.62-.53a6.5 6.5 0 0 0 1.131-.62A6.71 6.71 0 0 0 22 15.26v-6.5A6.76 6.76 0 0 0 15.257 2m-3.252 4.58a3.143 3.143 0 0 1 3.081 3.753a3.14 3.14 0 0 1-4.283 2.288a3.14 3.14 0 0 1-1.94-2.901a3.15 3.15 0 0 1 3.142-3.14m5.002 13.63a5 5 0 0 1-1.7.29H8.803a5.26 5.26 0 0 1-3.391-1.25a6.53 6.53 0 0 1 2.1-2.56a7.176 7.176 0 0 1 9.085 0a6.9 6.9 0 0 1 2.151 2.52c-.523.45-.828.698-1.486.907z"
                  /></svg
              ></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Menu -->
    <div
      class="absolute inset-0 bg-indigo-400 text-purple-50 grid place-content-center transition-all duration-500 ease-in-out z-40"
      [class.h-screen]="isMenuOpen"
      [class.h-0]="!isMenuOpen"
      id="menu-container"
    >
      <ul class="text-center space-y-6 text-3xl">
        <li
          class="opacity-0 transition-opacity duration-200 ease-in-out"
          [class.opacity-100]="isMenuOpen"
        >
          <a
            href="#"
            class="inline-block text-3xl leading-6 mb-2 transition-all duration-500 ease-in-out hover:text-teal-300"
            >Home</a
          >
        </li>
        <li
          class="opacity-0 transition-opacity duration-200 ease-in-out"
          [class.opacity-100]="isMenuOpen"
        >
          <a
            href="#"
            class="inline-block text-3xl leading-6 mb-2 transition-all duration-500 ease-in-out hover:text-teal-300"
            >Galería</a
          >
        </li>

        <li
          class="opacity-0 transition-opacity duration-200 ease-in-out"
          [class.opacity-100]="isMenuOpen"
        >
          <a
            href="#"
            class="inline-block text-3xl leading-6 mb-2 transition-all duration-500 ease-in-out hover:text-teal-300"
            >Acerca de</a
          >
        </li>

        <li
          class="lg:hidden opacity-0 transition-opacity duration-200 ease-in-out"
          [class.opacity-100]="isMenuOpen"
        >
          <a
            href="#"
            class="inline-block text-3xl leading-6 mb-2 transition-all duration-500 ease-in-out hover:text-teal-300"
            >Login</a
          >
        </li>
        <li
          class="lg:hidden opacity-0 transition-opacity duration-200 ease-in-out"
          [class.opacity-100]="isMenuOpen"
        >
          <a
            href="#"
            class="inline-block text-3xl leading-6 mb-2 transition-all duration-500 ease-in-out hover:text-teal-300"
            >Logout</a
          >
        </li>
        <li
          class="lg:hidden opacity-0 transition-opacity duration-200 ease-in-out"
          [class.opacity-100]="isMenuOpen"
        >
          <a
            href="#"
            class="inline-block text-3xl leading-6 mb-2 transition-all duration-500 ease-in-out hover:text-teal-300"
            >Perfil</a
          >
        </li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  isMenuOpen = false;

  menuItems = routes;

  constructor() {
    console.log(this.menuItems[0]);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

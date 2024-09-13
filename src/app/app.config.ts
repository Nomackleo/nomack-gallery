import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'nomack-gallery',
        appId: '1:105040900648:web:d7e5336ff27d704b78fb1d',
        storageBucket: 'nomack-gallery.appspot.com',
        apiKey: 'AIzaSyByim9yQ1yr1mto_mLJSpY_R8sU5Oq6F_Y',
        authDomain: 'nomack-gallery.firebaseapp.com',
        messagingSenderId: '105040900648',
        measurementId: 'G-LJJ31XGQH9',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};

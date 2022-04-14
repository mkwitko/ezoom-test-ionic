// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBytwcO0BIH493V-xfmXAYNz8vsmUkPdI0',
    authDomain: 'mktest-aa0af.firebaseapp.com',
    projectId: 'mktest-aa0af',
    storageBucket: 'mktest-aa0af.appspot.com',
    messagingSenderId: '901938073399',
    appId: '1:901938073399:web:b69b695dadbbf3f3f014b2',
    measurementId: 'G-S6VQ0D5NBH'
  },
  baseUrl: 'http://localhost:8080/',
  controllers: [
    'users'
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'networks-4dcef',
    appId: '1:628662010542:web:9e49f7cd44eab400aa233f',
    storageBucket: 'networks-4dcef.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAzaPC_yl5LhwTX7s_9v386Vu0v8zJG9xI',
    authDomain: 'networks-4dcef.firebaseapp.com',
    messagingSenderId: '628662010542',
    measurementId: 'G-CZSZEKWXKY',
    ngTokenPath: [ 'NetworsService', 'Firestore', 'Firestore' ],
  },
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAzaPC_yl5LhwTX7s_9v386Vu0v8zJG9xI",
    authDomain: "networks-4dcef.firebaseapp.com",
    projectId: "networks-4dcef",
    storageBucket: "networks-4dcef.appspot.com",
    messagingSenderId: "628662010542",
    appId: "1:628662010542:web:9e49f7cd44eab400aa233f",
    measurementId: "G-CZSZEKWXKY",
    ngTokenPath: [ 'NetworsService', 'Firestore', 'Firestore' ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

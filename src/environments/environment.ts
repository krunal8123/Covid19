// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/",
  X_RAPIDAPI_HOST: "coronavirus-monitor.p.rapidapi.com",
  X_RAPIDAPI_KEY: "cfe2855d40mshb45703d05279605p189c97jsnc368394faf8e"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

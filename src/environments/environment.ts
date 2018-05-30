// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDbw6QLHD2GUlu4Qv_tWHERoeA-5Ekl8GA",
    authDomain: "meutrocado.firebaseapp.com",
    databaseURL: "https://meutrocado.firebaseio.com",
    projectId: "meutrocado",
    storageBucket: "meutrocado.appspot.com",
    messagingSenderId: "55301903770"
  }
};

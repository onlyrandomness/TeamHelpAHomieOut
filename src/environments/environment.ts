// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBoFObH4FDPs7XhPzegnUEMqYz1dN1Bbl0',
    authDomain: 'helpahomieout-9414f.firebaseapp.com',
    databaseURL: 'https://helpahomieout-9414f.firebaseio.com',
    projectId: 'helpahomieout-9414f',
    storageBucket: '',
    messagingSenderId: '466897444830'
  },
  yelpApi: {
    key: 'Och20lKS23t1op8Bd1hr8ZZ73rBz2xJGCcpoEZKcmFGFb_g93igmMOjVaHr4_hOnpdgAgHSrE8bx7807RZX5zo0rx-Ie1chtVxg0Ry5kgaPjWiTOxmCjaxzazVXdWnYx',
    urlBase: 'https://api.yelp.com/v3/businesses/search'
  }
};

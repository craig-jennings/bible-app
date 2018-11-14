# Bible App

This is a simple Bible app that can be hosted anywhere. It requires no back end other than something to serve the files. It sources the passages from the [ESV](https://www.esv.org/) translation.

## Development

1. `(yarn|npm) install`
1. `(yarn|npm) start`

## Deployment (to Firebase)

1. Create a project in Firebase
1. Copy the project id into the "default" property in `.firebaserc`
1. `yarn global install firebase-tools` || `npm i -g firebase-tools`
1. `firebase login`
   - Follow instructions to login into firebase-cli
1. `firebase deploy --only hosting`

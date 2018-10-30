# Wishlist App

This is a simple wishlist app designed to run on Firebase

## Setup

1. Create a project in Firebase
1. Copy the project id into the default project in `.firebaserc`
1. Copy the web config into `firebase.config.js`

## Development

1. `yarn install`
1. `yarn start`

## Deployment

1. `yarn global install firebase-tools`
1. `firebase login`
   - Follow instructions to login into firebase-cli
1. `yarn run deploy`

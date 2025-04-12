# TODO:

## MVP

CreateDeck and OurModal: TODO: add loading disable of form fields

Figure out steps needed for publishing to Google Play Store

## Rest

add more type information

add edit mode toggle in deck list view

  add edit deck ability - goes to import but any cards that match the current terms will replace the old cards

add edit mode for cards in study session mode

  allow to edit term and definition

add a light/dark mode toggle to the settings

add sqlite storage for app settings

address warnings and errors in console from various actions - also shown as popup at bottom of the app

  its all in my dependencies - updating dependencies may fix it, but thats a large effort

# Marketing

Study Sama

From laptop to phone flashcards

Take notes in class on your laptop and quickly upload them to Flashcard Link to start studying now!

# Check if you have all dependencies

npx react-native doctor

# Running

npx react-native start

then input a or i for android or ios

OR

npx react-native run-android

npx react-native run-ios

## Running with reset cache

npx react-native start --reset-cache

# Very detailed logs

npx react-native log-android

npx react-native log-ios

## NOTE: console.log should appear without this in the main running terminal. if it doesnt, then use one of these and it will start to show, then you can stop the details logs

<!-- <a href='https://play.google.com/store/apps/details?id=com.studysama.upd'><img width="200" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a> -->
<!-- <a href='https://play.google.com/store/apps/details?id=com.studysama.upd'><img width="200" alt='Download on App Store' src='https://i.imgur.com/hash.png'/></a> -->

# debug shell on connected phone

adb shell

# release

https://developer.android.com/guide/app-bundle/test#deploy-using-studio

from the above:

  If you want to test building your app as an app bundle, and then deploying APKs from that app bundle to your connected device, you need to edit the default Run/Debug configuration as follows:

  Select Run > Edit Configurations from the menu bar.
  Select a run/debug configuration from the left pane.
  In the right pane, select the General tab.
  Select APK from app bundle from the dropdown menu next to Deploy.
  If your app includes an instant app experience that you want to test, check the box next to Deploy as an instant app.
  If your app includes feature modules, you can select which modules you want to deploy by checking the box next to each module. By default, Android Studio deploys all feature modules and always deploys the base app module.
  Click Apply or OK.
  When you select Run > Run from the menu bar, Android Studio builds an app bundle and uses it to deploy only the APKs required by the connected device and feature modules you selected.

https://developer.android.com/studio/publish/preparing#kts

## this makes a bundle but doesnt seem to be used when releasing locally. likely just on the play store

npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/majorziploc/flashcards_app.git

# Navigate to clonned folder and Install dependencies
cd flashcards_app && yarn install

# Install Pods
cd ios && pod install
```

#### 2. Open RNS in your iOS simulator

Run this command to start the development server and to start your app on iOS simulator:
```
yarn run:ios
```

Or, if you prefer Android:
```
yarn run:android
```

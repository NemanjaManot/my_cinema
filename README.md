# My Cinema

## About

My Cinema is React Native application that allows user to get information about now playing & upcoming movies in cinemas.

## Application flow

### User story
User has to register first (with valid full name, password & email information), after succesfully registering, user gets redirected to login screen.
After entering correct credentials, user gets redirected to home screen.
Home screen has two tabs - options to show now playing movies or show upcoming movies. On home screen movie list has basic movie information.
There is also single movie screen which has full movie information - title, release date, genres, trailer, tagline etc.
Also, there is User profile screen where logged user information is listed and also there is Logout button.

### Tech flow
- Auth: Registered users are stored in AsyncStorage as array. Logged user is also stored in AsyncStorage. Login credentials have to match (email & password). There is simple registration validation (full name, email regex, password) & also login validation.
- Main screen: When entering Mobx action gets invoked & we get data from API, set it to MobX store. MobX store is provided to App & components consume data from there.
- Profile: User information from AsyncStorage are represented here. When user logs out - logged user is deleted from AsyncStorage.
- UI: React Native Paper library is used for Material Design.
- API: [The Movie Database API](https://developers.themoviedb.org/3) - v3 is used

## Folder Structure  
 
```  
my-cinema/
├── README.md
├── node_modules/
├── package.json
├── .gitignore
├── app.json
├── babel.config.js
├── metro.config.js
├── index.js
├── android/
├── ios/
├── src/
|   ├──assets/ (style related files)
|   ├──components/ (UI reusable components)
|   ├──router/
|   ├──screens/ (Auth, InitialLoading & Main)
|   ├──services/ (api service & async storage service)
|   ├──store/ (MobX store)
|   ├──utils/ (custom PropTypes, config, regex)
|   └─ App.js
└──
```  

## Installation

Clone Github repo (or download zip):
```
$ git clone https://github.com/NemanjaManot/my_cinema.git
```

Install packages:
```
$ cd my-cinema
$ npm install
```

## Running

#### Run iOS

To run application for iOS:
```
$ cd ios
$ pod install
$ cd ..
$ npm run ios
```

#### Run Android

To run application for Android:
```
$ npm run android
```

Make sure you have **Android Emulator** up & running.

## Tech Stack

- React Native
- React
- MobX
- MobX - React
- Prop Types
- Axios
- React Native Paper
- Async Storage for RN
- React Navigation

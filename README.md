# react-native-flash-cards

This project was bootstrapped with Create React Native App.



# Project: readable-react-redux - [Mohamed Ismail]

# Description
  - A Web Contents and Comments Application using ReactJs, ReduxJs .
  - Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.
  - This content and comment structure is common across a large number of websites and applications.
  
  ### First open [MyReadable](http://localhost:3000/) to discover, how app works .
  -I use here `redux-model` to add posts .
  - Simply , It acts as a single page application using ReactJs-Redux .
  - the web app is a content and comment web app .
  - the web app allows  Users to be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

  #### How  components do interact with each other:
- Directory structure of the redux web app is by  `capability`

``` 
   src/
   - Components
      - component1.js
      - component2.js
      - component3.js
   - Actions
      - action1.js
      - action2.js
   - Reducers
      - reducer1.js
   - Util
   - Store
```



# Required Libraries and Dependencies
   - Install React App : `npm install -g create-react-native-app`
   - Create React App: `create-react-native-app AwesomeProject`
`

# How to Run Project 
   1.  Download all Project files
   2.  Run `yarn install` [yarn](https://yarnpkg.com/en/) is preferred package for ReactJs or `npm install` to install all required dependancies &packages .
   3.  Run `yarn start`  or `npm start` 
   3.  Try opening a web browser on your phone and opening the URL that the packager script prints, replacing exp:// with http://. So, for example, if underneath the QR code in your terminal you see:

exp://192.168.0.1:19000
Try opening Safari or Chrome on your phone and loading

http://192.168.0.1:19000
and

http://192.168.0.1:19001
If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the Create React Native App repository with details about these steps and any other error messages you may have received.

If you're not able to load the http URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager.

iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to npm run ios:

"non-zero exit code: 107"
"You may need to install Xcode" but it is already installed
and others
There are a few steps you may want to take to troubleshoot these kinds of errors:

Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
Open Xcode's Preferences, the Locations tab, and make sure that the Command Line Tools menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run npm/yarn run ios after doing so.
If that doesn't work, open the Simulator, and under the app menu select Reset Contents and Settings.... After that has finished, quit the Simulator, and re-run npm/yarn run ios.
QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may not have enough contrast for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.

 
# Miscellaneous
  - ESlint rules are implemented .
  - Implement on Amazon AWS Cloud or on Github pages 



# Resources
 
   1. [React Library](https://facebook.github.io/react/)
   2. [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
   3. [Create React updates-Webpack2](https://facebook.github.io/react/blog/2017/05/18/whats-new-in-create-react-app.html)
   4. [React Form and select element](https://facebook.github.io/react/docs/forms.html)
   5. [Short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation)
   6. [React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)
   7. [Using a function in `setState` instead of an object](https://medium.com/@shopsifter/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1)
   8. [Eslint Rules](http://eslint.org/)
   9. [Heroku Cloud](https://devcenter.heroku.com/) .
   10. [REST API Request](https://facebook.github.io/react-native/releases/0.33/docs/network.html).
   11. [Redux bindActionCreators](http://redux.js.org/docs/api/bindActionCreators.html).
   12. [Object Assign method](http://redux.js.org/docs/api/bindActionCreators.html).
   13. [React This Props Children](https://learn.co/lessons/react-this-props-children).
   14. [Redux Imuutable  State Invariant](https://github.com/leoasis/redux-immutable-state-invariant)
#Run


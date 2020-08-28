# Rodrigo Alcover website

## Things to do
* Change the title of the window in the browser bar from "React App" to "Rodrigo Alcover"
* Change the favicon to something else (find a favicon online)
* Create and add more posts to posts.js
* Update colors
* Follow more companies on LinkedIn
* Connect with more people at the companies that you follow
* Look at recruiting companies on linkedin
* Look at Greatflix and use the "qa-template" GIT repository for the template to send in the email
* iOS Emulator: Read this article https://www.superlogix.net/the-7-best-ios-emulators-for-your-pc.htm
* Android Emulator: on our computer, open the app "Genymotion"
* 

## Files and Folders explanation
* `/globalStyles` is where universal files are located.  They are loaded into /index.scss which does not include `module` in its name so it does not act like a css module.
* React directives can be found in the `/components` folder, including the screens themselves as their helper directives like `Search` or `DropDown`
* There is an analytics middleware that is able to catch each action that is performed.  As you can see in that file, some actions have been chosen to dispatch analytics events to the server (there is no server but this is where that functionality would exist)
* Using HOC to have inheritance between the screens, which helps with the animations as well as the responsiveness of the app.  If I had more time I would further flesh out the animations.
* The data is stored within the `reducers` folder and is combined together in the `Store.js` file.
* Selectors are used to memoize and quickly retrieve state.
* Actions are available across the app located in the `actions` folder.
* The blog posts are located in `/app/src/reducers/posts.js`.  You can add or update them there.  If there was a backend, this reducer would be hydrated by the backend service.
* I made the blog posts an object because it would allow for faster look ups rather than searching through arrays in various circumstances.  I could have taken the array approach but I like to try O(1) whenever I can.

### steps to start environment
```bash
$ cd projects
$ git clone {git repository https address (found by clicking the green CODE button on a Github repository website)}
$ cd {name of git repository and the folder that you just created}
$ code . <- open Visual Studio Code Editor to the folder that you 
$ yarn start
```

### How to update Github
```
// MAKE CHANGE TO CODE in your editor ie: Visual Studio Code
$ git add .
$ git commit -m "{your message}"
$ git push origin master <- branch like a tree
$ git checkout -b {branch-name} <- CREATES a new branch
// MAKE CHANGES TO CODE
$ git add .
$ git commit -m "{your message}"
$ git push origin {branch-name}
$ git checkout master
```

## How to run the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
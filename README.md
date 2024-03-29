# Medium clone on React hooks

This project relates to [Monster Lessons React Hooks course](https://monsterlessons.com/project/series/react-hooks-pishem-realnyj-proekt-s-nulya) and is Medium clone built with React Hooks on [demo.productionready.io](https://demo.productionready.io/) example.

Project uses absolute paths for imports via `jsconfig.json` file and Webpack (PascalCase) naming convention for top-level directories. To get more info read [here](https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d).

It's a SPA that uses browser router in development mode and hash router in production:

```
  const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter
```

Project is deployed on [GitHub Pages](https://ntonbala.github.io/medium-react-hooks). To deploy the project run `yarn run deploy`.

Project is styled via [demo.productionready.io](https://demo.productionready.io/) styles and [Ionic-Icons](https://www.tutorialspoint.com/ionic/ionic_icons.htm).

Project is localized with [react-i18next](https://locize.com/blog/react-i18next/). Default language is English.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project package manager is `yarn`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

// Fix auth context issue

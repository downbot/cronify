# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

------------------------------------------------

### Custom Environment Variables

- [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have NODE_ENV defined for you, and any other environment variables starting with REACT_APP_.

There is also a built-in environment variable called `NODE_ENV`. You can read it from `process.env.NODE_ENV`. When you run `npm start`, it is always equal to `'development'`, when you run npm test it is always equal to `'test'`, and when you run npm run build to make a production bundle, it is always equal to `'production'`. You cannot override NODE_ENV manually.

You can also access the environment variables starting with REACT_APP_ in the public/index.html. For example:

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
``

Note that the caveats from the above section apply:

- Apart from a few built-in variables (NODE_ENV and PUBLIC_URL), variable names must start with REACT_APP_ to work.
- The environment variables are injected at build time. If you need to inject them at runtime, [follow this approach instead](https://create-react-app.dev/docs/title-and-meta-tags#generating-dynamic-meta-tags-on-the-server).

##### Adding Development Environment Variables in `.env`

Files on the left have more priority than files on the right:

- **npm start**: `.env.development.local`, `.env.local`, `.env.development`, `.env`
- **npm run build**: `.env.production.local`, `.env.local`, `.env.production`, `.env`
- **npm test**: `.env.test.local`, `.env.test`, `.env`



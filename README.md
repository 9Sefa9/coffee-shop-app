# CoffeLove

"CoffeeLove" is a small mobile-friendly frontend project for mobile devices with a maximum width of 700px. It was programmed in react and react-bootstrap.
With "Coffee love" , you can view, order and buy favourite coffee. 

##ATTENTION
This project was designed for mobile-devices only. I know that this could be done with react-native but for now, I am very convinced that this application can be seen as a web-application which refers to mobile devices giving them an "IOS/Android-App"-like feeling. However, contribution are welcomed and features can be added in order to support larger devices.

## Features
The main features are currently a  Navigationbar, 
a simple Home Component with different popular drinks ordered in a two dimensional layout (grid-template) and some further basic styling. 

Hooks were not used yet. Thus, no interaction is programmed/ available except react-bootstrap's Component's like the Burgermenu in the NavigationBar Component. 

Next step would be: 

~ adding basic BrowserRouter or HistoryRouter inside App Component.

~ finishing every other Component which is listed inside the history / BrowserRouter.

~ Last step would be adding redux-toolkit for storing some items to the shopping-cart and so on. 

~ Unit-Testing with Jest.
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

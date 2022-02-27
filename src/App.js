import React, { Suspense, useReducer} from 'react';
import './App.stylesheet.css';
import CoffeeLoveContext from './context/coffeelove.context.js';
import CartSlice from './components/Cart/Cart.redux.js';
const NavigationBar = React.lazy(() => import('./components/NavigationBar/NavigationBar.component.js'));
const Home = React.lazy(() => import('./components/Home/Home.component.js'));
const Footer = React.lazy(() => import('./components/Footer/Footer.component.js'))

function App() {
  const [cartState, cartDispatch] = useReducer(CartSlice);
  return (
    <>
      <CoffeeLoveContext.Provider value={{cartState,cartDispatch}}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationBar />
          <Home />
          <Footer />
        </Suspense>
      </CoffeeLoveContext.Provider>
    </>

  );
}

export default App;

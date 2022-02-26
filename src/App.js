import React, { Suspense, useState } from 'react';
import './App.stylesheet.css';
import CoffeeLoveContext from './context/coffeelove.context.js';
const NavigationBar = React.lazy(() => import('./components/NavigationBar/NavigationBar.component.js'));
const Home = React.lazy(() => import('./components/Home/Home.component.js'));
const Footer = React.lazy(() => import('./components/Footer/Footer.component.js'))

function App() {
  const [cartSize, setCartSize] = useState(localStorage.getItem('cartSize'));

  return (
    <>
      <CoffeeLoveContext.Provider value={{
        cartSize: cartSize
      }}>
        <Suspense fallback={<div>RESIZE DESKTOP</div>}>
          <NavigationBar />
          <Home />
          <Footer />
        </Suspense>
      </CoffeeLoveContext.Provider>
    </>

  );
}

export default App;

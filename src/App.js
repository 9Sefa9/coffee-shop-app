import React, { Suspense } from 'react';
import './App.stylesheet.css';
const NavigationBar = React.lazy(()=>import('./components/NavigationBar/NavigationBar.component.js'));
const Home = React.lazy(()=>import('./components/Home/Home.component.js'));
const Footer = React.lazy(()=>import('./components/Footer/Footer.component.js'))

function App() {
  return (
    <>
    <Suspense fallback={<div>RESIZE DESKTOP</div>}>
      <NavigationBar />
      <Home />
      <Footer/> 
    </Suspense>
    
    </>
  );
}

export default App;

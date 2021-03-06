import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring'
import Toggle from './Toggle';
import Nav from './Nav';
import Checkout from './Checkout';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({ transform: isNavOpen ? 'translate3d(0,0,0) scaele(1)' : 'translate3d(190%,50%,0) scale(0.6)'})
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1})

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" />
        <button
          onClick={()=>setNavOpen(!isNavOpen)}
          className="menu-button">Menu</button>
        {/* <Nav style={navAnimation}/> */}
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={ isNavOpen }/>
      </main>
    </animated.div>
  );
}

export default App;

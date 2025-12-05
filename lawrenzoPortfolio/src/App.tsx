// import { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import Body from './Body/Body.tsx';
import Footer from './Footer/Footer.tsx';
import Header from './Header/Header.tsx';

function App() {
  return (
    <StrictMode>
    <div className='appContainer'>
      <Header />
      <Body />
      <Footer />
    </div>
    </StrictMode>
  );
}
const root = createRoot(document.getElementById('root')!);
root.render(<App />);

export default App;

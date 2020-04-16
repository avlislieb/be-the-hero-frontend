import React, { useEffect } from 'react';

import Routes from './routes';
import './global.css';
import ReactGa from 'react-ga';
import { initGA, PageView } from './components/Tracking';

function App() {
  useEffect(() => {
    initGA('UA-163765351-1');
    PageView();
    
  }, [])  

    return (
      <div>
          <Routes /> 
      </div>
      
    );
}

export default App;

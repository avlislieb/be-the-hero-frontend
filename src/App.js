import React, { useEffect } from 'react';

import Routes from './routes';
import './global.css';
import ReactGa from 'react-ga';

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-163765351-1');

    //to report page view 
    ReactGa.pageview('/');
  }, [])  

    return (
      <div>
          <Routes /> 
      </div>
      
    );
}

export default App;

import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import LoginView from './views/LoginView';
import SchemesView from './views/SchemesView';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginView />} />
        <Route path='/schemes' element={<SchemesView />} />
      </Routes>
    </div>
  );
}

export default App;

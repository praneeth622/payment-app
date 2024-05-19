import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Signin} from './pages/signin';
import {Signup} from './pages/signup';
import Dashboard from './pages/dashboard';
import Send from './pages/send';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/send' element={<Send/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
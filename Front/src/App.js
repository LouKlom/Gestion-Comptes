import React from 'react';

import Homepage from './HomePage/Homepage';
import Profil from './Profile/Profil';

import Administration from './Administration/Administration';
import Account from './Administration/Account/Account';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Homepage/>} />
            <Route path='/Profil' element={<Profil/>} />


            [Administration]
            <Route path='/Administration' element={<Administration/>} />
            <Route path='/Administration/Account' element={<Account/>} />


        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;

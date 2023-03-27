import { useState } from 'react';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';

import './App.scss';

import CharacterItemPage from './pages/CharacterItemPage/CharacterItemPage';
import Characters from './pages/Characters/Characters';
import LoginPage from './pages/Login/Login';
import AuthRoute from './components/AuthRoute/AuthRoute';

import { initializeApp } from 'firebase/app';
import { config } from './config/config';

export const Firebase = initializeApp(config.firebaseConfig);

const App = () => {
  const [userName, setUserName] = useState<string>('');
  
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route 
            path="/login" 
            element={
              <AuthRoute>
                <LoginPage setUserName={setUserName} />
              </AuthRoute>
            }
          />
          <Route path="/characters" element={<Characters userName={userName} />} />
          <Route path ="/character/:id" element = {<CharacterItemPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
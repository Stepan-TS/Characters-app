import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

import './../Login/Login.scss';

import Logo from '../../components/Logo/Logo';
import ButtonAuth from '../../components/Buttons/ButtonAuth/ButtonAuth';

import { ButtonAuthText } from '../../types';

type Props = {
  setUserName: Function;
}

const LoginPage: React.FC<Props> = ({ setUserName }) => {
  const [authing, setAuthing] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
      setUserName(response.user.displayName);
      navigate('/characters');
    })
    .catch((error) => {
      console.log(error);
      setAuthing(false);
    });
  };

  return (
    <div className='login-page'>
      <div className='login-page__content'>
        <div className='login-page__content-logo'>
          <Logo />
        </div>

        <div 
          className='button'
          onClick={() => signInWithGoogle()} 
        >
          <ButtonAuth
            ButtonAuthText={ButtonAuthText.SignIn}
            authing={authing}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


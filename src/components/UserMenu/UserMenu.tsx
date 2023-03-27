import React from 'react';
import { useNavigate } from 'react-router-dom';

import './UserMenu.scss';

import ButtonAuth from '../Buttons/ButtonAuth/ButtonAuth';

import { greetingUser } from '../../helpers/heplerFunction';
import { ButtonAuthText } from '../../types';

type Props = {
  userName: string;
  setQuery: Function;
};

const UserMenu: React.FC<Props> = (props) => {
  const {
    userName,
    setQuery,
  } = props;

  const navigate = useNavigate();
  const handlerGreetingUser = greetingUser(userName);
  const handlerSignOut = () => {
    setQuery('');
    window.localStorage.setItem('currentPage', JSON.stringify('1'));

    setTimeout(()=> {
      navigate('/login')
    }, 100);
  };
  
  return (
    <div className='user-menu'>
      <h3 className='user-menu__text'>{handlerGreetingUser}</h3>

      <div 
        className='user-menu__button'
        onClick={handlerSignOut}
      >
        <ButtonAuth ButtonAuthText={ButtonAuthText.SignOut} />
      </div>
  </div>
  );
};

export default UserMenu;
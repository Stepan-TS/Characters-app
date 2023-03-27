import React from 'react';
import { useNavigate } from 'react-router-dom';

import './UserMenu.scss';

import ButtonAuth from '../Buttons/ButtonAuth/ButtonAuth';

import { greetingUser } from '../../helpers/heplerFunction';
import { ButtonAuthText } from '../../types';

type Props = {
  userName: string;
};

const UserMenu: React.FC<Props> = (props) => {
  const {
    userName,
  } = props;

  const navigate = useNavigate();
  
  const getUserName = sessionStorage.getItem('userName');
  const newUserName = userName
    ? JSON.parse(userName)
    : getUserName

  const handlerGreetingUser = greetingUser(newUserName);

  const handlerSignOut = () => {
    sessionStorage.clear();
    navigate('/login')
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
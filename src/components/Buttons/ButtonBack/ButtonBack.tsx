import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ButtonBack.scss';

import back from '../../../image/back-btn.png';

const ButtonBack: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button 
      className='back-navigation'
      onClick={() => {navigate('/characters/#')}}
    >
      <img
        src={back}
        alt='navigate to characters page'
        className='back-navigation__img'
      />

      <p className='back-navigation__text'>
        GO BACK
      </p>
    </button>
  ) 
} 

export default ButtonBack;
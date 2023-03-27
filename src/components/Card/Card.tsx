import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Card.scss';

import { Character } from '../../types';

type Props = {
  character: Character;
}

const Card: React.FC<Props> = ({ character }) => {
   const { 
    id,
    name,
    image,
    species,
   } = character;

   const navigate = useNavigate();
    
  return (
    <div className='card' onClick={()=>{navigate(`/character/${id}`)}}>
        <img
          className='card-image'
          src={image}
          alt='character'
        />

        <div className='card-info'>
          <h3 className='card-info__name'>{name}</h3>
          <p className='card-info__species'>{species}</p>
        </div>
    </div>
  )
}

export default Card;
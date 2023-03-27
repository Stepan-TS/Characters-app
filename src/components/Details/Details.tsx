import React from 'react';
import './Details.scss';

import { Character } from '../../types';

import Characteristic from './Characteristic/Characteristic';

type Props = {
  character: Character | null;
}

const Details: React.FC<Props> = ({ character }) => {
  const {
    image,
    name,
  } = character || {};
  
  return (
    <div className='character-details character-details__box'>
      <img
        src={image}
        alt='character'
        className='character-details__image'
      />

      <h1 className='character-details__name'>{name}</h1>

      <p className='character-details__info'>Informations</p>

      <Characteristic character={character} />
    </div>
  )
}

export default Details;






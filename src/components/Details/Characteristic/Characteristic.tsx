import React from 'react';
import './Characteristic.scss';

import { Character, CharacterFields } from '../../../types';

type Props = {
  character: Character | null;
}

const Characteristic: React.FC<Props> = ({ character }) => {
  const {
    gender,
    status,
    species,
    origin,
    type,
  } = character || {};
  
  return(
    <section className='characteristic'>
    <div className='field'>
      <section className='box'>
        <p className='field-name'>{CharacterFields.Gender}</p>

        <p className='field-content'>{gender}</p>
      </section>
    </div>

    <div className='field'>
      <section className='box'>
        <p className='field-name'>{CharacterFields.Status}</p>

        <p className='field-content'>{status}</p>
      </section>
    </div>

    <div className='field'>
      <section className='box'>
        <p className='field-name'>{CharacterFields.Specie}</p>

        <p className='field-content'>{species}</p>
      </section>
    </div>

    <div className='field'>
      <section className='box'>
        <p className='field-name'>{CharacterFields.Origin}</p>

        <p className='field-content'>{origin?.name}</p>
      </section>
    </div>

    <div className='field'>
      <section className='box'>
        <p className='field-name'>{CharacterFields.Type}</p>

        <p className='field-content'>
          {type
            ? type 
            : 'Unknown'
          }
        </p>
      </section>
    </div>
    </section>
  )
}

export default Characteristic;
  

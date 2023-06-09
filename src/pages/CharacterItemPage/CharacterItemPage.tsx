import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './CharacterItemPage.scss';

import Details from '../../components/Details/Details';
import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';

import { Character } from '../../types';
import { getCharacterByID } from '../../api/api';


const CharacterItemPage: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCharacterByID(setCharacter, id);
    }
  }, [id])

  return (
    <div className='character-page'>
      <div className='character-page__button'>
        <ButtonBack />
      </div>

      <Details character={character} />
    </div>
  )
}

export default CharacterItemPage;
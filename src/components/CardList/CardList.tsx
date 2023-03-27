import React from 'react';
import './CardList.scss';

import { Character } from '../../types';
import Card from '../Card/Card';

import { charactersSortByName } from  '../../helpers/heplerFunction';

type Props = {
  characters: Character[];
}

const CardList: React.FC<Props> = ({ characters }) => (
  <div className='cardList'>
    {charactersSortByName(characters).map((character) => 
    <Card character={character} key={character.id} />)}
  </div>
)

export default CardList;
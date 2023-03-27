import React, { ChangeEvent, useEffect, useState } from 'react';
import './Characters.scss';

import CardList from '../../components/CardList/CardList';
import Pagination from '../../components/Pagination/Pagination';
import UserMenu from '../../components/UserMenu/UserMenu';
import Logo from '../../components/Logo/Logo';

import { filterByName } from '../../helpers/heplerFunction';
import { getCharacters } from '../../api/api';

import { Character } from '../../types';

import SearchIcon from '../../image/search.png';

type Props = {
  userName: string;
}

const Characters: React.FC<Props> = ({ userName }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [query, setQuery] = useState<string>('');
  const [visiableCharacters, setVisiableCharacters] = useState<Character[]>([])
  const [newQuery, setNewQuery] = useState<string>('')

  const firstPage = 1;
  const countCardsOfPage = 8;

  const [currentPage, setCurrentPage] = useState(firstPage);
  const [recordsPerPage] = useState(countCardsOfPage);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = visiableCharacters.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(visiableCharacters.length / recordsPerPage)

  const getQuery = localStorage.getItem('query') || '';
  
  const getCurrentPage = localStorage.getItem('currentPage')
    ?  Number(localStorage.getItem('currentPage'))
    :  firstPage;

  const checkIsNewQuery = newQuery !== null;

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handlerReturnToMainPage = () => {
    window.localStorage.setItem('currentPage', JSON.stringify(String(firstPage)))
    window.location.reload();
  }

  useEffect(() => {
    if (visiableCharacters.length < (countCardsOfPage + 1)) {
      setCurrentPage(firstPage);
    }
  }, [visiableCharacters.length])

  useEffect(() => {
    getCharacters(setCharacters);
  }, [])

  useEffect(() => {    
    setVisiableCharacters(filterByName(characters, query));
  }, [characters, query])

  useEffect(() => {
    if (checkIsNewQuery && query.length !== newQuery.length) {
      window.localStorage.setItem('query', JSON.stringify(query));
    }

    if (currentPage >= firstPage) {
      window.localStorage.setItem('currentPage', JSON.stringify(currentPage));
    }
  }, [query, currentPage])


  useEffect(() => {
    if (checkIsNewQuery) {
      setQuery(newQuery);
    }
  }, [newQuery])

  useEffect(() => {
    if (checkIsNewQuery && getQuery) {
      setNewQuery(JSON.parse(getQuery));
    } 
  }, [getQuery])

  useEffect(() => {
    if (getCurrentPage && getCurrentPage > firstPage) {
      setCurrentPage(getCurrentPage);
    } 
  }, [])
  
  return (
    <div className='home-page'>
      <div className='home-page__content'>
        <section className='content'>
          <UserMenu 
            userName={userName} 
            setQuery={setQuery}
          />

          <header className='content-header'>
            <a 
              href='/characters/my-app/build/index.html#/characters/'
              className='home-page__logo'
              onClick={handlerReturnToMainPage}
            >
              <Logo />
            </a>
          </header>
          
          <form
            className="search-form"
          >
            <label>
              <img
                className='search-form__icon'
                src={SearchIcon}
                alt='SearchIcon'
              />

              <input 
                className="search-form__input"
                type="text"
                defaultValue={newQuery || ''}
                name="search"
                placeholder="Filter by name..."
                onChange={handlerChange}
              />
            </label>
          </form>

          <CardList characters={currentRecords} />
        </section>
        
        <section className='pagination'>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </div>
    </div>
  )
}

export default Characters;

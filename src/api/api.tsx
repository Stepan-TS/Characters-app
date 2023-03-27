const API_CHARACTERS = 'https://rickandmortyapi.com/api/character';
const API_CHARACTER = 'https://rickandmortyapi.com/api/character/';

export function getCharacters(setFunc: Function): void {
  fetch(API_CHARACTERS)
    .then((res) => res.json())
    .then((characters) => {
      setFunc(characters.results)
  })
}

export function getCharacterByID(setFunc: Function, id: string): void {
  fetch(API_CHARACTER + id)
    .then((res) => res.json())
    .then((character) => {
      setFunc(character)
  })
}

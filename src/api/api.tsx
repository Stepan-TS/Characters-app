export function getCharacters(setFunc: Function): void {
  fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((characters) => {
        setFunc(characters.results)
    })
}

export function getCharacterByID(setFunc: Function, id: string): void {
    fetch('https://rickandmortyapi.com/api/character/' + id)
      .then((res) => res.json())
      .then((character) => {
        setFunc(character)
    })
}

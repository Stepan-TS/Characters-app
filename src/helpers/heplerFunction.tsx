import { Character } from "../types";

export function charactersSortByName(characters: Character[]): Character[] {
  const charactersSortByName = characters.sort((personPrev: Character, personCurr: Character) =>
  personPrev.name.localeCompare(personCurr.name));

  return charactersSortByName;
};

export function formattedToLowerCase(string: string): string {
  return string.toLocaleLowerCase();
};

export function filterByName(characters: Character[], query: string): Character[] {
  return characters.filter((character) => {
    const foundName = formattedToLowerCase(character.name)
    .includes(formattedToLowerCase(query))

    return foundName;
  })
}

export function greetingUser(user: string): string {
  const userName = user.split(' ')[0];

  return `Hello ${userName}!`;
}

export function userNameValidationCheck(name: string): string {
  return name.replace(/[^a-zA-Zа-яА-я ]/g, '');
}


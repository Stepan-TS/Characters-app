export interface Character {
  id: number,
  name: string,
  status: string,
  gender: string,
  species: string,
  type: string,
  origin: {
    name: string,
    url: string,
  },
  image: string,
}

export enum CharacterFields {
  Gender = 'Gender',
  Status = 'Status',
  Specie = 'Specie',
  Origin = 'Origin',
  Type = 'Type',
}

export enum ButtonAuthText {
  SignIn = 'Sign in with Google',
  SignOut = 'Sign out',
}

export interface AuthRouteProps {
  children: JSX.Element;
};


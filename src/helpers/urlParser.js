export const getId = (url) => {
  // expected code const url = 'https://swapi.dev/api/starships/52/';
  const result = url?.slice(32).split('/');
  return result[0];
};

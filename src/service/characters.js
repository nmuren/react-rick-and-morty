import { responeStatusHandler } from "utils/commonUtils";

export const getAllCharacters = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then(responeStatusHandler)
    .then((jsonData) => jsonData)
    .catch(console.error);
};

export const getCharacterById = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(responeStatusHandler)
    .then((jsonData) => jsonData)
    .catch(console.error);
};

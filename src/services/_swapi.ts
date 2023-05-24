import { Mode } from '../consts/types';

const apiUrl = 'https://swapi.dev/api/';

const getElementName = async (mode: Mode, id: number) => {
  const api = apiUrl;
  const response = await fetch(`${api}/${mode}/${id}`);
  const jsonData = await response.json();
  return jsonData.name;
};

export default getElementName;

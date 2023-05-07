import { Mode } from './_defaults';

const apiUrl = 'https://swapi.dev/api/';

export async function getElementName(mode: Mode, id: number) {
  const api = apiUrl;
  const response = await fetch(`${api}/${mode}/${id}`);
  const jsonData = await response.json();
  return jsonData.name;
}

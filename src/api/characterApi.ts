import type { CharactersType } from 'src/types/characterType';

import { axiosInstance } from 'src/api/api';

const CHARACTER_PATH = '/character';

const getAllCharacters = () => {
  return axiosInstance.get<CharactersType>(`${CHARACTER_PATH}`);
};

export default {
  getAllCharacters,
};

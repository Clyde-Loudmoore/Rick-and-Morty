import type { AxiosRequestConfig } from 'axios';

import type { CharactersType, FilterCharactersQueryType } from 'src/types';

import { axiosInstance } from 'src/api/api';

const CHARACTER_PATH = '/character';

const getAllCharacters = () => {
  return axiosInstance.get<CharactersType>(`${CHARACTER_PATH}`);
};

const getFilteredCharacters = (query: FilterCharactersQueryType) => {
  return axiosInstance.get<CharactersType>(`${CHARACTER_PATH}`, { params: { ...query } } as AxiosRequestConfig);
};

export default {
  getAllCharacters,
  getFilteredCharacters,
};

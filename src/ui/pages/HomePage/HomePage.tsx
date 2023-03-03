/* eslint-disable no-console */
import React from 'react';
import type { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import StyledHomePage from 'src/ui/pages/HomePage/HomePage.style';
import InputField from 'src/ui/components/InputField/InputField';
import Dropdown from 'src/ui/components/Dropdown/Dropdown';
import Character from 'src/ui/pages/HomePage/Character/Character';
import Button from 'src/ui/components/Button.styled';

import emblemImg from 'src//ui/assets/images/emblem.png';

import type { CharacterType } from 'src/types';

import characterApi from 'src/api/characterApi';
import useDebounce from 'src/hooks/useDebounce';

const HomePage: React.FC = () => {
  const [charactersInfo, setCharactersInfo] = React.useState<CharacterType[]>();
  const [filterCharacters, setFilterCharacters] = React.useState('');

  const [searchParams, setSearchParams] = useSearchParams({});

  const debouncedFilter = useDebounce(filterCharacters, 1500);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterCharacters(e.target.value);
  };

  let filteredCharacters: CharacterType[] = [];

  if (charactersInfo) {
    filteredCharacters = charactersInfo.filter((character) => {
      return character.name.toLowerCase().includes(character.name.toLowerCase());
    });
  }

  React.useEffect(() => {
    if (debouncedFilter) {
      searchParams.set('name', debouncedFilter as string);
    } else {
      searchParams.delete('name');
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilter]);

  React.useEffect(() => {
    (async () => {
      const name = searchParams.get('name') || '';
      // const species = searchParams.get('species') || '';
      // const gender = searchParams.get('gender') || '';
      // const status = searchParams.get('status') || '';

      setSearchParams({
        name,
        // species,
        // gender,
        // status,
      });

      const characters = characterApi.getFilteredCharacters({
        name,
        //  species,
        //  gender,
        //  status,
      });
      const arrayCharacters = (await characters).data.results;
      setCharactersInfo(arrayCharacters);
    })();
  }, [searchParams, setSearchParams]);

  return (
    <StyledHomePage>
      <div className="container">

        <div className="emblem">
          <img src={emblemImg} alt="Rick and Morty" />
        </div>

        <div className="filtration">
          <InputField
            placeholder="Filter by name..."
            onChange={handleChangeSearch}
          />

          {/* <Dropdown /> */}
        </div>

        <div className="characters-wrapper">
          {filteredCharacters.map((elem) => {
            return (
              <Character
                key={elem.id}
                avatar={elem.image}
                name={elem.name}
                species={elem.species}
              />
            );
          })}
        </div>

        <Button>
          LOAD MORE
        </Button>

      </div>
    </StyledHomePage>
  );
};

export default HomePage;

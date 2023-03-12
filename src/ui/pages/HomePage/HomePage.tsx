/* eslint-disable no-console */
import React from 'react';
import type { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { CharacterType } from 'src/types';

import characterApi from 'src/api/characterApi';
import useDebounce from 'src/hooks/useDebounce';

import StyledHomePage from 'src/ui/pages/HomePage/HomePage.style';
import InputField from 'src/ui/components/InputField/InputField';
import Dropdown from 'src/ui/components/Dropdown/Dropdown';
import Character from 'src/ui/pages/HomePage/Character/Character';
import Button from 'src/ui/components/Button.styled';
import FilterBySpecies from 'src/ui/components/Dropdown/FilterBySpecies/FilterBySpecies';

import emblemImg from 'src//ui/assets/images/emblem.png';

const HomePage: React.FC = () => {
  const [charactersInfo, setCharactersInfo] = React.useState<CharacterType[]>();
  const [filterCharacters, setFilterCharacters] = React.useState('');
  const [species, setSpecies] = React.useState<CharacterType[]>();

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
    (async () => {
      const spec = await characterApi.getAllCharacters();
      const arraySpec = spec.data.results;

      setSpecies(arraySpec);
    })();
  }, []);

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
      const species = searchParams.get('species') || '';
      // const gender = searchParams.get('gender') || '';
      // const status = searchParams.get('status') || '';
      const page = searchParams.get('page') || '1';

      setSearchParams({
        name,
        species,
        // gender,
        // status,
        page,
      });

      const characters = characterApi.getFilteredCharacters({
        name,
        species,
        //  gender,
        //  status,
        page,
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

          <Dropdown title="Species">
            <FilterBySpecies species={species} />
          </Dropdown>
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

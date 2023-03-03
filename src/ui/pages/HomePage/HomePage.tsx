/* eslint-disable no-console */
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import StyledHomePage from 'src/ui/pages/HomePage/HomePage.style';
import InputField from 'src/ui/components/InputField/InputField';
import Dropdown from 'src/ui/components/Dropdown/Dropdown';
import Character from 'src/ui/pages/HomePage/Character/Character';
import Button from 'src/ui/components/Button.styled';

import emblemImg from 'src//ui/assets/images/emblem.png';

import type { CharacterType } from 'src/types/characterType';

import characterApi from 'src/api/characterApi';

const HomePage: React.FC = () => {
  const [charactersInfo, setCharactersInfo] = React.useState<CharacterType[]>();
  const [saveSorting, setSaveSorting] = React.useState('');

  const [searchParams, setSearchParams] = useSearchParams({});

  React.useEffect(() => {
    (async () => {
      const characters = characterApi.getAllCharacters();
      const arrayCharacters = (await characters).data.results;
      setCharactersInfo(arrayCharacters);
    })();
  }, []);

  return (
    <StyledHomePage>
      <div className="container">

        <div className="emblem">
          <img src={emblemImg} alt="Rick and Morty" />
        </div>

        <div className="filtration">
          <InputField placeholder="Filter by name..." />

          {/* <Dropdown /> */}
        </div>

        <div className="characters-wrapper">
          {charactersInfo?.map((elem) => {
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

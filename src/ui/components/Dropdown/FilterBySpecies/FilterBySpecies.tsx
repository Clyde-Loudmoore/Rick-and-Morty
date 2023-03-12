/* eslint-disable no-console */
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import type { CharacterType } from 'src/types';

import StyledFilterBySpecies from 'src/ui/components/Dropdown/FilterBySpecies/FilterBySpecies.style';
import FilterItem from 'src/ui/components/Dropdown/FilterBySpecies/FilterItem/FilterItem';

import poligon from 'src/ui/assets/icons/polygon.png';

type PropsType = {
  species?: CharacterType[];
};

const FilterBySpecies: React.FC<PropsType> = (props) => {
  const [filter, setFilter] = React.useState<string[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const stringSpecies: string[] = [];

  for (let i = 0; i < props.species!.length; i++) {
    stringSpecies.push(props.species![i].species);
  }

  const newSet = new Set(stringSpecies);
  const uniqueSpecies = Array.from(newSet);

  const changeFilterState = (newFilter: string) => {
    setFilter((prevFilter) => {
      if (prevFilter.includes(newFilter)) {
        return prevFilter.filter((searchFilter) => searchFilter !== newFilter);
      }

      return [...prevFilter, newFilter];
    });
  };

  React.useEffect(() => {
    searchParams.set('species', filter.join());
    if (!filter.length) {
      searchParams.delete('species');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return (
    <StyledFilterBySpecies>
      <img className="poligon" src={poligon} />
      {uniqueSpecies.map((elem) => {
        return (
          <FilterItem
            key={elem}
            text={elem}
            setState={changeFilterState}
            filter={filter}
          />
        );
      })}
    </StyledFilterBySpecies>
  );
};

export default FilterBySpecies;

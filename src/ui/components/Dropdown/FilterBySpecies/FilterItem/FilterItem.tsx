/* eslint-disable no-console */
import React from 'react';

import StyledFilterItem from 'src/ui/components/Dropdown/FilterBySpecies/FilterItem/FilterItem.style';
import Button from 'src/ui/components/Button.styled';

import cheched from 'src/ui/assets/icons/checked.png';
import unchecked from 'src/ui/assets/icons/unchecked.png';

type PropsType = {
  text: string;
  setState: (newFilter: string) => void;
  filter: string[] | string;
};

const FilterItem: React.FC<PropsType> = (props) => {
  const [status, setStatus] = React.useState(true);

  const handleChangeItem = (text: string) => {
    setStatus(false);
    const index = props.filter.indexOf(text);
    if (index !== -1) {
      setStatus(true);
    }
    props.setState(text);
  };

  return (
    <StyledFilterItem onClick={() => handleChangeItem(props.text)}>
      <Button className="checkbox">
        <img src={status ? unchecked : cheched} />
      </Button>
      <p>{props.text}</p>
    </StyledFilterItem>
  );
};

export default FilterItem;

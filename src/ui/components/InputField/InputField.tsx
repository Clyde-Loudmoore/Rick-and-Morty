import type { FormEventHandler } from 'react';

import StyledInputField from 'src/ui/components/InputField/InputField.style';

import searchIcon from 'src/ui/assets/icons/search.png';

type PropsType = {
  placeholder: string;
  onChange: FormEventHandler;
};

const InputField: React.FC<PropsType> = (props) => {
  return (
    <StyledInputField>
      <img src={searchIcon} className="search" />
      <input
        type="text"
        className="filter-input"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </StyledInputField>
  );
};

export default InputField;

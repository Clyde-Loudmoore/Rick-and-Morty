import StyledInputField from 'src/ui/components/InputField/InputField.style';

import searchIcon from 'src/ui/assets/icons/search.png';

type PropsType = {
  placeholder: string;
};

const InputField: React.FC<PropsType> = (props) => {
  return (
    <StyledInputField>
        <img src={searchIcon} className="search" />
        <input type="text" className="filter-input" placeholder={props.placeholder} />
    </StyledInputField>
  );
};

export default InputField;

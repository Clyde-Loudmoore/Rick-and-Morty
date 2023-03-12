import React from 'react';
import type { ReactNode } from 'react';

import StyledDropdown from 'src/ui/components/Dropdown/Dropdown.styled';

import useOnClickOutside from 'src/hooks/useOnClickOutside';

import arrowDownIcon from 'src/ui/assets/icons/arrow-drop-down.png';

type PropsType = {
  title: string;
  active?: boolean;
  children?: ReactNode;
};

const Dropdown: React.FC<PropsType> = (props) => {
  const [active, setActive] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setActive(false);
  };

  useOnClickOutside(ref, clickOutsidehandler);

  return (
    <StyledDropdown ref={ref}>
      <div className="wrapper" onClick={() => setActive(!active)}>
        <p>{props.title}</p>
        <img src={arrowDownIcon} />
      </div>

      {active && props.children}
    </StyledDropdown>
  );
};

export default Dropdown;

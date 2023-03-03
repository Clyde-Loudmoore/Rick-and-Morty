import StyledHeader from 'src/ui/containers/Header/Header.style';

import logo from 'src/ui/assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} className="logo" />
        <div className="navbar">
          <ul className="items-navbar">
            <li className="item-navbar">Characters</li>
            <li className="item-navbar">Locations</li>
            <li className="item-navbar">Episodes</li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

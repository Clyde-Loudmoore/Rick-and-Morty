import StyledHomePage from 'src/ui/pages/HomePage/HomePage.style';

import emblemImg from 'src//ui/assets/images/emblem.png';
import searchIcon from 'src/ui/assets/icons/search.png';

const HomePage: React.FC = () => {
  return (
    <StyledHomePage>
      <div className="container">

        <div className="emblem">
          <img src={emblemImg} alt="Rick and Morty" />
        </div>

        <div className="filters">

          <div className="filter-by-name">
            <img src={searchIcon} className="search" />
            <input type="text" className="filter-input" placeholder="Filter by name..." />
          </div>

        </div>

      </div>
    </StyledHomePage>
  );
};

export default HomePage;

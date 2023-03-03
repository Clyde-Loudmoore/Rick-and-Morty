import StyledHomePage from 'src/ui/pages/HomePage/HomePage.style';
import InputField from 'src/ui/components/InputField/InputField';

import emblemImg from 'src//ui/assets/images/emblem.png';

const HomePage: React.FC = () => {
  return (
    <StyledHomePage>
      <div className="container">

        <div className="emblem">
          <img src={emblemImg} alt="Rick and Morty" />
        </div>

        <div className="filtration">
          <InputField placeholder="Filter by name..." />
        </div>

      </div>
    </StyledHomePage>
  );
};

export default HomePage;

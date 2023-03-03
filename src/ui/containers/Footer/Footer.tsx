import StyledFooter from 'src/ui/containers/Footer/Footer.style';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="container">
        <h2 className="description">
          The site was created by Denis Stanovoy
        </h2>
      </div>
    </StyledFooter>
  );
};

export default Footer;

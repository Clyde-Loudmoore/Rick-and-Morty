import styled from 'styled-components';

const StyledHomePage = styled.main`
  background-color: #ffffff;

  .container {
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .filtration {
    margin-bottom: 61px;
    display: flex;
    gap: 20px;
  }

  .filter-input {
    width: 100%;
    border: none;
  }

  .filter-input:active {
    border: none;
  }

  .characters-wrapper {
    margin-bottom: 48px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export default StyledHomePage;

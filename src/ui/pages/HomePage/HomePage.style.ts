import styled from 'styled-components';

const StyledHomePage = styled.main`
  background-color: #ffffff;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .filter-by-name {
    max-width: 240px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .filter-input {
    width: 100%;
    border: none;
  }

  .filter-input:active {
    border: none;
  }
`;

export default StyledHomePage;

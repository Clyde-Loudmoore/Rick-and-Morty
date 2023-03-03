import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 6px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .items-navbar {
    display: flex;
    gap: 24px;
  }

  .item-navbar {
    list-style-type: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
`;

export default StyledHeader;

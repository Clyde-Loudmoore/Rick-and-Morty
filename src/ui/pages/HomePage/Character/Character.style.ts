import styled from 'styled-components';

const StyledCharacter = styled.div`
  max-width: 240px;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  .avatar {
    width: 100%;
  }

  .description {
    padding: 12px 16px;
  }

  .name {
    font-weight: 500;
    font-style: 20px;
    line-height: 30px;
    margin-bottom: 7px;
  }

  .species {
    font-weight: 400;
    font-style: 14px;
    line-height: 21px;
    color: grey;
  }
`;

export default StyledCharacter;

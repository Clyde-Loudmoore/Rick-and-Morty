import StyledCharacter from 'src/ui/pages/HomePage/Character/Character.style';

type PropsType = {
  avatar: string;
  name: string;
  species: string;
};

const Character: React.FC<PropsType> = (props) => {
  return (
    <StyledCharacter>
      <img src={props.avatar} className="avatar" />
      <div className="description">
        <h2 className="name">{props.name}</h2>
        <p className="species">{props.species}</p>
      </div>
    </StyledCharacter>
  );
};

export default Character;

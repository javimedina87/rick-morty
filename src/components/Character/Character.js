import classes from './Character.module.css';

const Character = ({ data }) => {
  const onClickCharacter = (characterData) => {
    console.log('Character data: ', characterData);
  }

  return (
    <div className={classes['character-card']} onClick={() => onClickCharacter(data)}>
      <img src={data.image} alt={data.name}/>
      <p className={classes.name}>{data.name}</p>
    </div>
  )
}

export default Character;
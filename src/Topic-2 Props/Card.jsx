const Card = (props) => {
  const { username, age, team, skill, jersy, address } = props?.player || props;
  const city = address?.state?.city;    
  const name = address?.state?.name;    

  return (
    <div style={{
      border: "1px solid black",
      width: "300px",
      padding: "20px 30px",
      marginTop: "20px",
    }}>
      <h4>Username: {username}</h4>
      <h4>Age: {age}</h4>
      <h4>Team: {team}</h4>
      <h4>Skill: {Array.isArray(skill) ? skill[2] : skill}</h4>
      <h4>Jersy: {jersy}</h4>
    </div>
  );
};

export default Card;
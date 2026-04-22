
const Card = (props) => {

  console.log("props:",props); // { player: {}}

  const {username, age, team, skill, jersy,address} = props?.player;
  const {name,city} = address?.state;

const Card = ({ username = "Chombu Singh", age, skill, team, jersy }) => {
  return (
    <>
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        padding: "20px 30px",
        marginTop: "20px",
      }}
    >
      <h4>Username: {username}</h4>
      <h4>Age: {age}</h4>
      <h4>Team: {team}</h4>
      <h4>Skill: {skill[2]}</h4>
      <h4>Skill: {skill}</h4>
      <h4>Jersy: {jersy}</h4>
      <h4>City: {city}</h4>
      <h4>State: {name}</h4>
    </>
    </div>
  );
};

export default Card;
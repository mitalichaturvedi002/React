import Card from "./Card"
const Parent = ()=> {
    const player1 = {
        username:"Virat Kohli",
        age:36,
        team: "RCB",
        jersy:18,
        skill:"Batting"
     }

     const player2 = {
        username:"Rohit Sharma",
        age:38,
        team: "MI",
        jersy:45,
        skill:"Batting"
     }

     const player3 = {
       username:"MS Dhoni",
        age:43,
        team: "CSK",
        jersy:7,
        skill:"Batting"
     }
     return <div className="parent-component">
            <Card {...player1} />
            <Card {...player2} />
            <Card {...player3} />
      </div>
     

}
export default Parent;
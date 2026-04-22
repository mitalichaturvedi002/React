
const Parent = () => {

    const player = {
    const player1 = {
        username: "Rohit Sharma",
        age: 38,
        team: "MI",
        jersy: 45,
        skill: ["batting","bowling", "captaincy"],
        address: {
            country: "India",
            state: {
                name: "Maharashtra",
                city: "Mumbai"
            },
        }
        skill: "batting",        
    }    

    const player2 = {
        username: "Virat Kohli",
        age: 36,
        team: "RCB",
        jersy: 18,
        skill: "batting",        
    }

    const player3 = {
        username: "Mahendra Singh Dhoni",
        age: 43,
        team: "CSK",
        jersy: 7,
        skill: "batting",        
    }
        
    return <div className="parent-component">
            
            {/* <Card username="Virat Kohli" age={36} team="RCB" skill="batting" jersy={18} /> */}

            <Card player={player} />
            <Card {...player1} />
            <Card {...player2} />
            <Card {...player3} />
    </div>
}
import Card from "./Card";

const Parent = () => {

    const player1 = {
        username: "Rohit Sharma",
        age: 38,
        team: "MI",
        jersy: 45,
        skill: ["batting", "bowling", "captaincy"],
        address: {
            country: "India",
            state: {
                name: "Maharashtra",
                city: "Mumbai"
            },
        }
    }

    const player2 = {
        username: "Virat Kohli",
        age: 36,
        team: "RCB",
        jersy: 18,
        skill: ["batting", "fielding", "running"],
        address: {
            country: "India",
            state: {
                name: "Delhi",
                city: "New Delhi"
            },
        }
    }

    const player3 = {
        username: "Mahendra Singh Dhoni",
        age: 43,
        team: "CSK",
        jersy: 7,
        skill: ["batting", "wicketkeeping", "captaincy"],
        address: {
            country: "India",
            state: {
                name: "Jharkhand",
                city: "Ranchi"
            },
        }
    }

    return (
        <div className="parent-component">
            <Card player={player1} />
            <Card player={player2} />
            <Card player={player3} />
        </div>
    );
}

export default Parent;
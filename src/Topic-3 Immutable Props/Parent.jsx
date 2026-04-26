import Card from "./Card";

const Parent = ()=>{

    const user={
        username: "Sid",
        age:24
    }

    return (
           <div>
        {/*<Child username={username} age={age}/> */}
        <Child user={user} />
    </div>
    );

};
export default Parent;
import {useState, useMemo} from "react";
import {useState, useMemo, useCallback} from "react";
import Child from "../components/Child";

const Order = () => {
  const [login, setLogin] = useState(false);
  const [input, setInput] = useState(""); // input = 123456
  console.log("Parent Render");
  const [count, setCount] = useState(0); // count = 0
  console.log("Parent Render")

  const heavyCalculation = (n) => {
    console.log("Heavy Calculation")
    if (!n || n <= 0) return null;
const greet = useCallback(() => console.log("Hello useCallback"),[]); // greet = 01x1

    let count = 0;
    let num = 1;

    while (count < n) {
      num++;
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) count++;
    }

    return num;
  };

  const result =  useMemo(() => heavyCalculation(+input),[input]);
  const user = useMemo(() => ({fullname: "Chombu Singh", age: 24}),[]);     // user = 01y1
 

  return (
    <div id="order">
      <div className="center-box">
        {login ? <h1>Welcome to Order Page</h1> : <h1>Please Login</h1>}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter n to find nth prime"
          style={{padding: "12px 16px", fontSize:"16px"}}
        />
        <button onClick={() => setLogin(!login)}>Click</button>
        <Child result={result} />
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add Count</button>
       
        <Child greet={greet} user={user} />
      </div>
    </div>
  );
};

export default Order;
export default Order;



{/* <Order/>
<Order/> */}
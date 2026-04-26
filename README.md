# 3. What is JSX? What are the rules to rite JSX?

 1. JSX stands for JavaScript XML.
 2. It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files. 
 3. It was introduced by Facebook (Meta) for React.

There rules are:- 
1. Return Only One Parent Element
2. All Tags (including Self-Closing Tags) Must Be Properly Closed . 
3. Use CamelCase for Attributes (ex:- onclick, onChange)
4. JavaScript Expressions in {}
5. To write comment in JSX use 
  {/* */}
6. Don't use if-else directly inside JSX instead use ternary or logical operator.
7. Use className instead of class.
8. Use htmlFor instead of for in label tag.


# 4. What is a component in React? Types of component?
A component in React is a reusable(self-contained) piece of code that returns  some piece of JSX.

It is of 2 types

1. Class Based component(CBC)
    i) A Class Component is a JavaScript class that extends React.Component.
    ii) It has render() method to return JSX.
    iii) It was the traditional way of writing React components before 2019.

2. Function Based Component (FBC)
   i) A function based component is a simple javascript function which returns some piece of jsx.
   ii) It is now the recommended and most popular way to write components in modern React.

# What is React.Fragment and What is Empty Fragment?

1. Fragment:- A wrapper component that lets you group multiple elements without adding an extra DOM node to the HTML output. 

2. Empty Fragment:- A shorthand syntax for React.Fragment that does the same thing — groups elements without extra DOM nodes — but doesn't support the key prop.

Note:- we can not write id and className attribute in both fragment.


# What is Component Composition?
Component Composititon is the pratice of calling one component inside another componenet.

Example

function Header(){
  return <h1>Welcome</h1>
}

function App(){
  return {
    <div>
      <header/> {/*header component called  inside App*/}
    </div>
  }
}

# What is Props?
Props {short for "properties"} are a mechanism used to pass data from one component to another, typically in a unidirectional {top-down} flow from parent to child.

//Parent passes props
<Greeting name="Alice" age={25}/>

//child receives and uses them
function Greeting ({name,age}){
  return <h1>Hello,{name}!You are {age}years old</h1>;
}

# Why we use Props or Charateristics of props?

Characteristics
* Immutable:-a child component cannot modify its own props
* Unidirectional:- data flowa only from parent ->child
* Any Type:- strings, numbers, arrays, objects, functions, even JSx
* Destructured:- commonly destructed in the function signature for cleaner code


! UseCase

* Pass Data:- Send data from parent component to child component 
* Reusability:- Same component can be used for multiple times with different data.
* Dynamic Contnet :- Components show different contne t based on props recieved .

* Avoid  Repetition:- Write the component once,reuse it anywhere.
* Communication:- the only way for a parent to a child component. 


# 8. What is default props?
Default props in React allow you to define fallabck values for a component's properties {props}

Example
function Greetitng({name= "Guest", age=18}) {
  return (
    <h1> Hello, {name}! You are {age}years old</h1>

  );
}
<Greeting />
Component call Without passing props:

# What is Children Props?

1. children props is a special, built-in property that allows you to pass content between the operating and closing tags of a component.
2. Anything placed inside a component's tags is automatically passed to that component as props.children.
3. Children can be strings, numbers, JSX elements, arrays, or even functions.

Example 

function Card ({children}){
  return <div className="card">{children}</div>

}

//Now you can put ANYTHING inside  Card Component
<Card>
<h2>Title</h2>
<p>Description here</p>
</Card>


# What is Props Drilling ?
1. Props Drilling  is the process of passing data (props) through multiple layers of components to reach a deeply nested child that needs it,even if the intermediate components do not use that data

NOTE:
To avoid props drilling we use context API,React State management libraries.

EXample


# 12 What is render props?
1. Render props is when you pass a function as a props to a component, and that component calls the function to render something.

EXAMPLE:

//Component accepts a function as a props
function Greet({render}){
  return <div>{render("Alice")}</div>;//calls the function
}

//Passing a function as a props
<Greet render={(name)=><h1></h1>
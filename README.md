## 3. What is JSX? What are the rules to rite JSX?
# React Notes

- JSX stands for JavaScript XML.
- It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files.
- It was introduced by Facebook (Meta) for React.
---

There rules are:-
## Table of Contents

1. Return Only One Parent Element
2. All Tags (including Self-Closing Tags) Must Be Properly Closed .
3. Use CamelCase for Attributes (ex:- onclick, onChange)
4. JavaScript Expressions in {}
5. To write comment in JSX use
   `{/* */}`
6. Don't use if-else directly inside JSX instead use ternary or logical operator.
7. Use className instead of class.
8. Use htmlFor instead of for in label tag.
1. [What is React and its Features?](#1-what-is-react-and-its-features)
2. [Why Use React When We Have HTML, CSS, and JS?](#2-why-use-react-when-we-have-html-css-and-js)
3. [What is JSX? Rules to Write JSX](#3-what-is-jsx-rules-to-write-jsx)
4. [What is a Component in React? Types of Components](#4-what-is-a-component-in-react-types-of-components)
5. [What is React.Fragment and Empty Fragment?](#5-what-is-reactfragment-and-empty-fragment)
6. [What is Component Composition?](#6-what-is-component-composition)
7. [What is Props?](#7-what-is-props)
8. [What is Default Props?](#8-what-is-default-props)
9. [Why We Use Props / Characteristics of Props](#9-why-we-use-props--characteristics-of-props)
10. [What is Children Prop?](#10-what-is-children-prop)
11. [What is Props Drilling?](#11-what-is-props-drilling)
12. [What is Render Prop?](#12-what-is-render-prop)
13. [What is Synthetic Event in React?](#13-what-is-synthetic-event-in-react)
14. [What is Virtual DOM?](#14-what-is-virtual-dom)
15. [What is Reconciliation?](#15-what-is-reconciliation)
16. [What is Diffing Algorithm?](#16-what-is-diffing-algorithm)
17. [What is Render Phase?](#17-what-is-render-phase)
18. [What is Commit Phase?](#18-what-is-commit-phase)
19. [What is State?](#19-what-is-state)
20. [Difference Between State and Props](#20-difference-between-state-and-props)
21. [What is Hooks?](#21-what-is-hooks)
22. [What is useState Hook?](#22-what-is-usestate-hook)
23. [What is Batching?](#23-what-is-batching)
24. [What is Conditional Rendering?](#24-what-is-conditional-rendering)
25. [Lazy Initialization in useState](#25-lazy-initialization-in-usestate)
26. [What is useEffect?](#26-what-is-useeffect)
27. [Difference Between useState and useEffect](#27-difference-between-usestate-and-useeffect)
28. [React Lifecycle Methods in Function Based Component](#28-react-lifecycle-methods-in-function-based-component)
29. [What is a Single Page Application (SPA)?](#29-what-is-a-single-page-application-spa)
30. [What is a Multi Page Application (MPA)?](#30-what-is-a-multi-page-application-mpa)
31. [Difference Between SPA and MPA](#31-difference-between-spa-and-mpa)
32. [What is Client Side Routing?](#32-what-is-client-side-routing)
33. [What is Server Side Routing?](#33-what-is-server-side-routing)
34. [What is react-router-dom?](#34-what-is-react-router-dom)
35. [createBrowserRouter vs BrowserRouter](#35-createbrowserrouter-vs-browserrouter)
36. [Difference Between Link and NavLink](#36-difference-between-link-and-navlink)
37. [What is Outlet?](#37-what-is-outlet)
38. [What is Index Prop?](#38-what-is-index-prop)

## 4. What is a component in React? Types of component?
---

A component in React is a reusable(self-contained) piece of code that returns some piece of JSX.
## 1. What is React and its Features?

It is of 2 types
> _(To be filled)_

1. Class Based component(CBC)
   - A Class Component is a JavaScript class that extends React.Component.
   - It has render() method to return JSX.
   - It was the traditional way of writing React components before 2019.
---

2. Function Based Component (FBC)
   - A function based component is a simple javascript function which returns some piece of jsx.
   - It is now the recommended and most popular way to write components in modern React.
## 2. Why Use React When We Have HTML, CSS, and JS?

## 5. What is React.Fragment and What is Empty Fragment?
> _(To be filled)_

1. Fragment:- A wrapper component that lets you group multiple elements without adding an extra DOM node to the HTML output.
---

2. Empty Fragment:- A shorthand syntax for React.Fragment that does the same thing — groups elements without extra DOM nodes — but doesn't support the key prop.
## 3. What is JSX? Rules to Write JSX

Note:- we can not write id and className attribute in both fragment.
**JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files. It was introduced by Facebook (Meta) for React.

## 6. What is Component Composition?
### Rules

Component Composition is the practice of calling one component inside another component.
| #   | Rule                                                                       |
| --- | -------------------------------------------------------------------------- |
| 1   | Return only **one parent element**                                         |
| 2   | All tags (including self-closing) must be **properly closed**              |
| 3   | Use **camelCase** for attributes (e.g., `onClick`, `onChange`)             |
| 4   | JavaScript expressions go inside `{}`                                      |
| 5   | Comments use `{/* */}` syntax                                              |
| 6   | No `if-else` directly inside JSX; use **ternary** or **logical operators** |
| 7   | Use `className` instead of `class`                                         |
| 8   | Use `htmlFor` instead of `for` in `<label>` tags                           |

#### Example
---

```
## 4. What is a Component in React? Types of Components

A **component** in React is a reusable, self-contained piece of code that returns JSX.

### Types

#### 1. Class Based Component (CBC)

- A JavaScript class that extends `React.Component`
- Has a `render()` method to return JSX
- Traditional way of writing components (before 2019)

#### 2. Function Based Component (FBC)

- A simple JavaScript function that returns JSX
- Recommended and most popular way in modern React

---

## 5. What is React.Fragment and Empty Fragment?

| Type                        | Description                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `React.Fragment`            | A wrapper component that groups multiple elements without adding an extra DOM node. Supports the `key` prop. |
| `<>...</>` (Empty Fragment) | Shorthand for `React.Fragment`. Does the same thing but does **not** support the `key` prop.                 |

> **Note:** Neither fragment supports `id` or `className` attributes.

---

## 6. What is Component Composition?

**Component Composition** is the practice of calling one component inside another component.

```jsx
function Header() {
  return <h1>Welcome</h1>;
}

function App() {
  return (
    <div>
      <Header />  {/* Header component called inside App */}
      <Header /> {/* Header component called inside App */}
    </div>
  );
}
```

## 7. What is Props?
---

Props (short for "properties") are a mechanism used to pass data from one component to another, typically in a unidirectional (top-down) flow from parent to child.
## 7. What is Props?

#### Example
**Props** (short for "properties") are a mechanism used to pass data from one component to another, in a **unidirectional (top-down)** flow from parent to child.

```
  // Parent passes props
  <Greeting name="Alice" age={25} />
```jsx
// Parent passes props
<Greeting name="Alice" age={25} />;

  // Child receives and uses them
  function Greeting({ name, age }) {
    return <h1>Hello, {name}! You are {age} years old.</h1>;
  }
// Child receives and uses them
function Greeting({ name, age }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}
```

## 8. what is default props?
---

Default props in React allow you to define fallback values for a component's properties (props)
## 8. What is Default Props?

#### Example
**Default props** allow you to define fallback values for a component's props when none are passed.

```
```jsx
function Greeting({ name = "Guest", age = 18 }) {
  return (
    <h1>Hello, {name}! You are {age} years old.</h1>
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}

<Greeting />
Component call Without passing props:
// Called without any props
<Greeting />;
// Output: Hello, Guest! You are 18 years old.
```

## 9. Why we use Props or characteristics of props?
---

##### Characteristics
## 9. Why We Use Props / Characteristics of Props

- Immutable:- a child component cannot modify its own props
- Unidirectional:- data flows only from parent → child
- Any type:- strings, numbers, arrays, objects, functions, even JSX
- Destructured:- commonly destructured in the function signature for cleaner code
### Characteristics

##### Usecase
| Property           | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| **Immutable**      | A child component cannot modify its own props                    |
| **Unidirectional** | Data flows only from parent to child                             |
| **Any type**       | Strings, numbers, arrays, objects, functions, even JSX           |
| **Destructured**   | Commonly destructured in the function signature for cleaner code |

- Pass Data:- Send data from parent component to child component
- Reusability:- Same component can be used multiple times with different data
- Dynamic Content:- Components show different content based on props received
- Avoid Repetition:- Write the component once, reuse it anywhere
- Communication:- The only way for a parent to talk to a child component
### Use Cases

## 10. What is Children prop?
- **Pass Data** - Send data from parent to child
- **Reusability** - Same component reused with different data
- **Dynamic Content** - Components show different content based on props
- **Avoid Repetition** - Write once, reuse anywhere
- **Communication** - The only way for a parent to communicate with a child

1.  children prop is a special, built-in property that allows you to pass content between the opening and closing tags of a component.
2.  Anything placed inside a component's tags is automatically passed to that component as props.children.
3.  Children can be strings, numbers, JSX elements, arrays, or even functions.
---

#### Example
## 10. What is Children Prop?

`props.children` is a special, built-in prop that lets you pass content between the opening and closing tags of a component.

- Anything placed inside a component's tags is automatically passed as `props.children`
- Children can be strings, numbers, JSX elements, arrays, or even functions

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Usage
<Card>
  <h2>Title</h2>
  <p>Description here</p>
</Card>;
```
 function Card({ children }) {
   return <div className="card">{children}</div>;
 }

 // Now you can put ANYTHING inside Card Component
 <Card>
   <h2>Title</h2>
   <p>Description here</p>
 </Card>
```

---

## 11. What is Props Drilling?

1. Prop Drilling is the process of passing data (props) through multiple layers of components to reach a deeply nested child that needs it, even if the intermediate components do not use that data
**Prop Drilling** is the process of passing data (props) through multiple layers of components to reach a deeply nested child that needs it, even if the intermediate components do not use that data.

##### NOTE: To avoid props drilling we use context API, React State Management Libraries.
> **To avoid prop drilling:** Use **Context API** or React state management libraries (Redux, Zustand, etc.)

```jsx
// Data starts here in Parent
function Parent() {
  const name = "Alice";
  const age = 25;
  return (
    <div>
      <h1>I am Parent</h1>
      <Child name={name} age={age} />
    </div>
  );
}

#### Example
// Child receives and passes down to SubChild
function Child({ name, age }) {
  return (
    <div>
      <h2>I am Child</h2>
      <SubChild name={name} age={age} />
    </div>
  );
}

```
    // ✅ Data starts here in Parent
    function Parent() {
      const name = "Alice";
      const age = 25;

      return (
        <div>
          <h1>I am Parent</h1>
          <Child name={name} age={age} />  {/* passing to Child */}
        </div>
      );
    }


    // ✅ Child receives and passes down to SubChild
    function Child({ name, age }) {
      return (
        <div>
          <h2>I am Child</h2>
          <SubChild name={name} age={age} />  {/* passing to SubChild */}
        </div>
      );
    }


    // ✅ SubChild finally uses the data
    function SubChild({ name, age }) {
      return (
        <div>
          <h3>I am SubChild</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      );
    }
// SubChild finally uses the data
function SubChild({ name, age }) {
  return (
    <div>
      <h3>I am SubChild</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

## 12. What is render prop?
---

1.  Render Prop is when you pass a function as a prop to a component, and that component calls the function to render something.
## 12. What is Render Prop?

#### Example
A **Render Prop** is when you pass a function as a prop to a component, and that component calls the function to render something.

```
     // Component accepts a function as a prop
     function Greet({ render }) {
       return <div>{render("Alice")}</div>; // calls the function
     }
```jsx
// Component accepts a function as a prop
function Greet({ render }) {
  return <div>{render("Alice")}</div>; // calls the function
}

     // Passing a function as a prop
     <Greet render={(name) => <h1>Hello, {name}!</h1>} />
// Passing a function as a prop
<Greet render={(name) => <h1>Hello, {name}!</h1>} />;

     // Output → Hello, Alice!
// Output: Hello, Alice!
```

## 13. what is Synthetic event in React?
---

1. A synthetic event in React is a cross-browser wrapper around the browser's native event object.
2. React normalizes events so they behave identically across all browsers.
3. Instead of getting a raw MouseEvent or KeyboardEvent from the DOM, you get a SyntheticEvent object that has the same interface (preventDefault(), stopPropagation(), target, currentTarget, etc.) but works consistently everywhere.
## 13. What is Synthetic Event in React?

## 14. What is Virtual Dom?
A **Synthetic Event** is a cross-browser wrapper around the browser's native event object.

1. The Virtual DOM (VDOM) is a lightweight, in-memory JavaScript representation (a tree of JavaScript objects) of the Real DOM.
2. Instead of updating the Real DOM every time something changes, React maintains a virtual copy of it in memory.
3. React uses it to create a new tree on every re-render and then compares it with the previous one to optimize DOM updates.
- React normalizes events so they behave identically across all browsers
- Instead of a raw `MouseEvent` or `KeyboardEvent`, you get a `SyntheticEvent` object
- Has the same interface: `preventDefault()`, `stopPropagation()`, `target`, `currentTarget`, etc.

## 15. What is Reconcilliation?
---

Reconciliation is the process React uses to figure out how to efficiently update the DOM (Document Object Model) when changes occur in the UI
## 14. What is Virtual DOM?

The **Virtual DOM (VDOM)** is a lightweight, in-memory JavaScript representation (a tree of JavaScript objects) of the Real DOM.

- Instead of updating the Real DOM on every change, React maintains a virtual copy in memory
- On re-render, React creates a new virtual tree and **compares it with the previous one** to optimize DOM updates

---

## 15. What is Reconciliation?

**Reconciliation** is the process React uses to figure out how to efficiently update the DOM when changes occur in the UI.

---

## 16. What is Diffing Algorithm?

Diffing Algorithm is React’s heuristic-based[ o(n) ] comparison algorithm that efficiently finds differences between the new and old Virtual DOM trees.
The **Diffing Algorithm** is React's heuristic-based `O(n)` comparison algorithm that efficiently finds differences between the new and old Virtual DOM trees.

---

# 17. What is Render Phase?
## 17. What is Render Phase?

The Render Phase is the first phase of React’s reconciliation process. During this phase, React invokes the component functions (or render() method in class components), creates a new Virtual DOM tree, and performs diffing to determine the minimal set of changes needed to update the UI.
The **Render Phase** is the **first phase** of React's reconciliation process.

- It is pure and side-effect free.
- React may pause, abort, or restart this phase multiple times (due to concurrent rendering in React 18+).
- No DOM mutations or side effects should occur here.
- React invokes the component functions (or `render()` in class components)
- Creates a new Virtual DOM tree
- Performs diffing to determine the minimal set of changes needed

# 18. What is Commit Phase?
**Key properties:**

The Commit Phase is the second and final phase of React’s reconciliation process. In this phase, React applies the calculated changes (mutations) to the real DOM in a single, synchronous batch.
- Pure and side-effect free
- React may pause, abort, or restart this phase (due to concurrent rendering in React 18+)
- No DOM mutations or side effects should occur here

- It runs after the Render Phase is completed.
![Render Phase and Commit Phase Diagram](./render_commit_phase.png)

---

## 18. What is Commit Phase?

The **Commit Phase** is the **second and final phase** of React's reconciliation process. React applies the calculated changes (mutations) to the real DOM in a single, synchronous batch.

- Runs after the Render Phase is complete
- Side effects are executed here:
  - useLayoutEffect() (before browser paint)
  - useEffect() (after browser paint)
  - `useLayoutEffect()` runs **before** browser paint
  - `useEffect()` runs **after** browser paint

# 19. what is State?
---

- State in React is an internal, mutable data structure that represents the dynamic data of a component.
- whenever state variable changes react will re-render the component.
## 19. What is State?

# 20. Difference between state and props?
**State** in React is an internal, mutable data structure that represents the dynamic data of a component.

### props
- Whenever a state variable changes, React **re-renders** the component

1. Props are Immutable
2. Props are used for passing data from one component to another component.
3. Props are owned and controlled by the parent component.
4. The child component only receives and consumes them.
---

### state
## 20. Difference Between State and Props

1. State is Mutable
2. State is internal to the component.
3. The component that declares it can directly read or update it.
4. State Update Triggers Re-render
| Aspect     | Props                                 | State                                       |
| ---------- | ------------------------------------- | ------------------------------------------- |
| Mutability | Immutable                             | Mutable                                     |
| Purpose    | Pass data between components          | Manage internal component data              |
| Ownership  | Owned and controlled by parent        | Owned by the component that declares it     |
| Updates    | Child cannot modify props             | Component can read and update its own state |
| Re-render  | Does not trigger re-render on its own | State update triggers re-render             |

# 21. What is Hooks?
---

- Hooks are special built-in functions in React that allow you to use state and other React features (like lifecycle methods, context, refs, etc.) in functional components.
## 21. What is Hooks?

#### Features
**Hooks** are special built-in functions in React that allow you to use state and other React features (like lifecycle methods, context, refs, etc.) in **functional components**.

- Hooks introduced in React 16.8
- Hooks allow Functional Components to be Stateful
- Hooks Start with "use"
- Enable Better Code Reuse
### Key Features

# 22. What is useState Hook?
- Introduced in **React 16.8**
- Allow Functional Components to be stateful
- Always start with `"use"` (e.g., `useState`, `useEffect`)
- Enable better code reuse

1. "useState is a built-in React Hook that allows you to add and manage local state in functional components.
2. It returns an array with two elements: the current state value and a function to update that state."
---

#### syntax
## 22. What is useState Hook?

```
`useState` is a built-in React Hook that allows you to add and manage local state in functional components. It returns an array with two elements: the current state value and a function to update it.

### Syntax

```js
const [state, setState] = useState(initialValue);
```

- state → Current value of the state (read-only)
- setState → Function used to update the state
- initialValue → Initial value of the state (can be number, string, boolean, object, array, etc.)
| Element        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `state`        | Current value of the state (read-only)                              |
| `setState`     | Function used to update the state                                   |
| `initialValue` | Initial value (can be number, string, boolean, object, array, etc.) |

# 23. What is Batching?
---

- Batching in React is the process where React groups multiple state updates into a single re-render instead of re-rendering the component after every individual state update.
- This improves performance by reducing unnecessary re-renders.
## 23. What is Batching?

# 24. what is conditional Rendering?
**Batching** in React is the process where React groups multiple state updates into a **single re-render** instead of re-rendering after every individual state update.

- Conditional Rendering in React is the technique of rendering different UI elements or components based on certain conditions.
- Here we use if-else, ternary operator and logical operator(short circuit operator).
- Improves performance by reducing unnecessary re-renders

# 25. can we write function as an initial value in useState(fn) Lazy Initialization?
---

- "Lazy Initialization in useState is a technique where we pass a function as the initial value to useState. React calls this function only once during the initial render of the component and uses its return value as the initial state.
- This is useful for expensive computations that should not run on every re-render."
## 24. What is Conditional Rendering?

#### syntax
**Conditional Rendering** is the technique of rendering different UI elements or components based on certain conditions.

```
- Uses `if-else`, ternary operator `? :`, or logical (short-circuit) operator `&&`

---

## 25. Lazy Initialization in useState

**Lazy Initialization** is a technique where you pass a **function** as the initial value to `useState`. React calls this function only **once** during the initial render and uses its return value as the initial state.

This is useful for expensive computations that should not run on every re-render.

### Syntax

```js
const [state, setState] = useState(() => {
  // This function runs ONLY ONCE during initial render
  return expensiveComputation();
});
```

## 26. what is useEffect?
---

The useEffect hook is a built-in React function that allows you to perform side effects in functional components.
## 26. What is useEffect?

Side effects are operations that interact with systems outside of React's (like api call).
The `useEffect` hook is a built-in React function that allows you to perform **side effects** in functional components.

### 1. No dependency array - runs after every render
Side effects are operations that interact with systems outside of React (e.g., API calls, DOM manipulation, timers).

#### syntax
### Variants

```
#### 1. No dependency array - runs after every render

```js
useEffect(() => {
  console.log("runs after every render");
  console.log("Runs after every render");
});
```

### 2. Empty dependency array - runs once on mount
#### 2. Empty dependency array - runs once on mount

```js
useEffect(() => {
  console.log("Runs once, like componentDidMount");
}, []);
```

#### 3. With dependencies - runs when those values change

```js
useEffect(() => {
  console.log("Runs when count or name changes");
}, [count, name]);
```

---

## 27. Difference Between useState and useEffect

| Aspect             | useState                         | useEffect                                          |
| ------------------ | -------------------------------- | -------------------------------------------------- |
| Purpose            | Add and manage state (data)      | Perform side effects                               |
| Returns            | `[currentState, setState]` array | `undefined` (nothing)                              |
| Triggers re-render | Yes, when `setState` is called   | No                                                 |
| Timing             | Synchronous during render        | Runs after render (and after paint)                |
| Common use         | Storing dynamic values           | API calls, subscriptions, timers, DOM manipulation |

#### syntax
---

## 28. React Lifecycle Methods in Function Based Component

Every React component goes through 3 phases:

```
MOUNT  -->  UPDATE  -->  UNMOUNT
(born)     (changes)     (dies)
```

### Phase 1: Mounting

Component is created and inserted into the DOM for the first time.

```js
useEffect(() => {
  console.log("runs once, like componentDidMount");
  console.log("Runs once after component mounts");
}, []);
```

### 3. With dependencies - runs when those values change
### Phase 2: Updating

#### syntax
Component re-renders due to state or prop changes.

```
```js
useEffect(() => {
  console.log("runs when count or name changes");
  console.log("Runs when count or name changes");
}, [count, name]);
```

## 27. difference between useState and useEffect Hook?
### Phase 3: Unmounting

#### useState:
Component is removed from the DOM. The **cleanup function** runs at this point.

- Used to add and manage state (data) in functional components.
- Returns an array with 2 values: [currentState, setState].
- Updating state with setState() triggers a re-render of the component.
- Preserves value between re-renders.
```js
useEffect(() => {
  console.log("Effect runs");

### useEffect:
  return () => {
    console.log("Cleanup: component unmounted"); // Runs on unmount
  };
}, []);
```

- Used to perform side effects (actions outside normal rendering).
- Runs after the component renders (and after paint in most cases).
- Common uses: data fetching, DOM manipulation, subscriptions, timers, event listeners.
- The useEffect hook itself does not return any value (it returns undefined).
---

## 28. what is React lifecycle methods in Function Based Component?
## 29. What is a Single Page Application (SPA)?

    Every React component goes through 3 phases in its life:
A **Single Page Application** is a web app that loads a **single HTML document** and dynamically updates the DOM using JavaScript, instead of requesting new pages from the server on each navigation.

      MOUNT  →  UPDATE  →  UNMOUNT
      (born)    (changes)   (dies)
---

#### Phase 1: MOUNTING
## 30. What is a Multi Page Application (MPA)?

    - Component is created and inserted into the DOM for the first time.
    - On Mounting phase useEffect Runs only once after component is added to DOM.
A **Multi-Page Application** is a traditional web architecture where every user interaction (clicking a link, submitting a form) triggers a **full browser refresh** to load a completely new HTML page from the server.

    ```
      useEffect(() => {
        console.log("runs once, like componentDidMount");
      }, []);
    ```
---

#### Phase 2: Updating
## 31. Difference Between SPA and MPA

- Component re-renders due to state or prop changes.
- On Updating Phase useEffect runs when a specific value changes.
| Aspect       | SPA                  | MPA                          |
| ------------ | -------------------- | ---------------------------- |
| Page Loads   | One initial load     | Full reload per page         |
| Performance  | Faster navigation    | Slower navigation            |
| SEO          | Harder (needs SSR)   | Naturally good               |
| Development  | Usually one codebase | Traditional (multiple pages) |
| Initial Load | Slightly high        | Low                          |

```
  useEffect(() => {
    console.log("runs when count or name changes");
  }, [count, name]);
```
---

#### Phase 3: Unmounting
## 32. What is Client Side Routing?

- Component is removed from the DOM.
- useEffect cleanup function will be called in this phase
**Client-side routing** is when navigation between pages is handled by **JavaScript in the browser**. Instead of requesting a new page from the server, JavaScript libraries (like React Router, Vue Router) update the URL using the History API and render the appropriate component without reloading the page.

```
useEffect(() => {
console.log("runs when count or name changes");
---

## 33. What is Server Side Routing?

return () => {
      console.log("Cleanup function);  // This cleanup function will be called
}
}, []);
```
**Server-side routing** is the traditional method where the browser sends a request to the server for every new URL. The server generates and sends back a complete HTML page, causing a **full browser refresh**.

---

## 34. What is react-router-dom?

# 29. what is Single Page Application?
A Single Page Application is a web app that loads a single HTML document and dynamically updates the DOM using JavaScript instead of requesting new pages from the server on each navigation.
**React Router DOM** is a popular library for client-side routing in React applications. It allows you to create a Single Page Application (SPA) and navigate between views without full page reloads.

# 30. what is Multi Page Application?
A Multi-Page Application (MPA) is a traditional web architecture where every user interaction—like clicking a link or submitting a form—triggers a full browser refresh to load a completely new HTML page from the server.
---

## 35. createBrowserRouter vs BrowserRouter

# 31. Difference between SPA and MPA?
Aspect:                SPA                  MPA
Page Loads:      One initial load       Full reload per page
Performance:     Faster navigation      Slower navigation
SEO:             Harder (needs SSR)     Naturally good
Development:     Usually one codebase   Traditional (multiple pages)
Initial Load:     Slightly high         Low
### createBrowserRouter

# 32. what is client side routing?
Client-side routing is when the navigation between pages is handled  by JavaScript in the browser. Instead of requesting a new page from the server, the JavaScript libraries (like React Router, Vue Router) updates the URL using the History API and renders the appropriate component/view without reloading the page.
- A function introduced in **React Router v6.4+**
- Creates a router instance using the History API
- **Recommended** approach
- Supports data APIs like `loaders`, `actions`, and `fetchers`

# 33. what is Server side routing?
Server-side routing is the traditional method where the browser sends a request to the server for every new URL; the server then generates and sends back a complete HTML page, causing a full browser refresh.
### BrowserRouter

# 34. what is react-router-dom ?
React Router DOM is a popular library for client-side routing in React applications. It allows you to create a Single Page Application (SPA) and navigate between them without full page reloads.
- A component that wraps your app and enables client-side routing using the History API
- Does **not** support React Router v6.4+ data APIs like loaders and actions

# 35. what is createBrowserRouter and BrowserRouter?
### createBrowserRouter:
A function introduced in React Router v6.4+ that creates a router instance using the History API. It is the recommended way to define routes as it supports data APIs like loaders, actions, and fetchers.
### BrowserRouter:
A component that wraps your app and enables client-side routing using the History API. It does not support React Router v6.4+ data APIs like loaders and actions.
---

## 36. Difference Between Link and NavLink

# 36. Difference between Link and NavLink?
### Link
- A component that renders an anchor tag and navigates(move) to a route without a full page reload.
- Used in for general navigation (e.g., a "Read More" button or a link in a footer).

### Navlink
- Same as Link but applies an active class when its route matches the current URL.
- Used in Navbar or Dashboard tabs.
- Renders an anchor tag and navigates to a route without a full page reload
- Used for general navigation (e.g., "Read More" button, footer links)

# 37. what is an Outlet?
A component used in parent routes that acts as a placeholder where the matched child route's component gets rendered.
#### Syntax
```
### NavLink

- Same as `Link` but **applies an active class** when its route matches the current URL
- Used in Navbars or Dashboard tabs

---

## 37. What is Outlet?

`<Outlet />` is a component used in parent routes that acts as a **placeholder** where the matched child route's component gets rendered.

```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* child route renders here */}
    </div>
  );
}
```

---

# 38. what is index prop?
A boolean prop on a route that marks it as the default child route, rendered inside the parent's Outlet when no other child route matches.
## 38. What is Index Prop?

#### Syntax
```
The `index` prop is a boolean on a route that marks it as the **default child route**, rendered inside the parent's `<Outlet />` when no other child route matches.

```jsx
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardHome /> }, // renders when path is exactly /dashboard
      { path: "settings", element: <Settings /> },
      { index: true, element: <DashboardHome /> }, // renders at /dashboard
      { path: "settings", element: <Settings /> }, // renders at /dashboard/settings
    ],
  },
]);
```

---

## Test 2 - Question Bank

> Attempt any **11 questions**. Question 12 is **compulsory**.

1. What is VDOM, Reconciliation, and Diffing Algorithm?
2. What is Render Phase and Commit Phase?
3. What is State? Difference between State and Props?
4. What is Hooks? Explain useState Hook with syntax.
5. Can we write a function as an initial value in `useState`? (Lazy Initialization)
6. What is Batching and Conditional Rendering?
7. What is the `useEffect` Hook? Difference between `useState` and `useEffect`.
8. What is the React Lifecycle Method in Function Based Components?
9. Difference between SPA and MPA?
10. Difference between Client Side Routing and Server Side Routing?
11. What is the Key prop? When should we use index as a key prop?
12. **(Compulsory)** Explain the following terms:
    1. `createBrowserRouter`
    2. `BrowserRouter`
    3. `Link` vs `NavLink`
    4. Index Prop
    5. `Outlet`
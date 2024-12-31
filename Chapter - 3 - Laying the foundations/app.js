import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// Babel transpiles => React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🎉"
);

//JSX - is HTML or XML like syntax
// JSX =>Babel transpiles => React.createElement => Object => HTMLElement(render)
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React inside JSX
  </h1>
);

// Both are same objects
console.log(heading);
console.log(jsxHeading);

// React Component
// Class based component - OLD
// Functional Component - NEW

const Title = () =>{
  <h1 className="head" tabIndex="5">
    React Using JSX
  </h1>
}

const number = 100000

// Component Composition
const HeadingComponent = () => {
  return <div id="container">
  <h2>{number}</h2>
  {Title()}
  <Title />
  <Title></Title>
  <h1 className="heading">React Functional Component</h1>
  </div> 
}

console.log(HeadingComponent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)

// both will render the same thing
// root.render(heading);
// root.render(jsxHeading);

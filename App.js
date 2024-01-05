import React from "react";
import ReactDOM from "react-dom/client";

// JSX - is not HTML in JS. It has similar syntax like HTML
// React Element
const heading = (
  <h1 className="root" tabIndex="1">
    Namaste React using jsx
  </h1>
);

//React Component
// There are two types of component
// 1 : Class Based components - OLD style of writing code
// 2: Functional Components - New way of writing code

// React Functional Component

const HeadingComponentWithReturn = () => {
  return (
    <div id="container">
      <h1 className="root" tabIndex="1">
        Namaste React functional compoment jsx
      </h1>
    </div>
  );
};

const elem = <span> This is a react element in span </span>;
// *Both these components are same.
// *If there is only on statement then no need to give {} and the return statement
const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React Title Component
  </h1>
);

const jsfunc = (
  <h1 className="f1" tabIndex="2">
    {elem}
    Namaste React Normal js function using jsx
  </h1>
);
const number = 10000;

// *Component composition - Having one or more component inside one component
const HeadingComponent = () => (
  <div id="container">
    {jsfunc}
    {Title()}
    <Title></Title>
    <Title />
    <h1 className="root" tabIndex="1">
      Namaste React functional compoment jsx
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

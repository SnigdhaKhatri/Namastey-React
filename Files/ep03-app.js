import React from "react"
import ReactDOM from "react-dom/client"

const reactHeading = React.createElement('h1', {}, "H1 from React");

//React element
const jsxHeading = (<h1 className="head">
    H1 from JSX
    </h1>);

//React functional component 
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="Headdd">Hello from React Functional Component</h1>
    </div>
);

//Another React Component 
const Title = () => <h1>Title Component</h1>

//React functional component 
const HeadingComponent2 = () => (
    // <></> is react fragment
    <>
        {/*Calling component inside another component = Component Composition*/}
        <Title/>
        <Title></Title>
        {Title()}

        {/*Any JS can be written inside the Curly braces*/}
        {jsxHeading}
        {reactHeading}
        {123 + 123}

        <h1 className="Headdd">Hello from React Functional Component</h1>
    </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);
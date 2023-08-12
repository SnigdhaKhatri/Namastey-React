const parent = React.createElement("div", {
    "id": "parent1"
}, [React.createElement("h1", {}, "I am H1"),
React.createElement("h2", {}, "I am H2")]);

// const parent = React.createElement("div", {}, React.createElement("h1", {}, "I am H1"));

// const heading = React.createElement("h1", {
//     "id": "heading",
//     "abc": "xyz"
// }, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
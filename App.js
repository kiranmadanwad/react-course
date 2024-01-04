const parent = React.createElement("div",
    { id: "parent" },
    [ React.createElement("div",
        { id: "child" },
        [React.createElement("h1", { id: "h11" },
            "This is h1 tag"),
        React.createElement("h2", { id: "h22" },
            "This is h2 tag")
        ]
    ), 
    React.createElement("div",
        { id: "child2" },
        [React.createElement("h1", { id: "h11" },
            "This is h1 tag"),
        React.createElement("h2", { id: "h22" },
            "This is h2 tag")
        ]
    )],
);



//const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  
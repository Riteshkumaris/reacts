const heading = React.createElement("h1",{id:"heading"},"this is the world where you can do any thing do ");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"i m h1 tag"),
React.createElement("h2",{},"i m h2 tag"),]
),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"i m h1 tag"),
    React.createElement("h2",{},"i m h2 tag"),]
),]);
root.render(parent);
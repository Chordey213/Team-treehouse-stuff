const title = <h1>My First REACT Element</h1>
const desc = <p>I just learned how to create a REACT Node, and place it into the DOM</p>
console.log(title);
const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
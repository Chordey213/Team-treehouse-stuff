const desc = 'I just learned how to create a REACT Node, and place it into the DOM'
const myTitleID = 'main title';
const name = 'Cory';

const header = (
    <header>
        <h1 id ={myTitleID}>{ name}'s First REACT Element</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
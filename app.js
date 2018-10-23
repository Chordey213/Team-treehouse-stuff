const players = [
    {
    name:"Cory",
    score:"50",
    id: 1
    },

    {
    name:"Lauren",
    score:"90",
    id: 2
    },

    {
    name:"Arianna",
    score:"85",
    id: 3
    },

    {
    name:"Teddy",
    score:"80",
    id: 4
    },

    {
    name:"Tinny",
    score:"50",
    id: 5
    },
];

const Header = (props) => 
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">{ props.totalPlayers }</span>
        </header>;
 // component built in Arrow function syntax. No curly braces //

const Player = (props) => 

<div className="player">
    <span className="player-name">
        { props.name }
    </span>
    <Counter score={ props.score }/>
</div>

const Counter = (props) =>
<div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> + </button>
</div>

// JSX Comment  = {/* Comment Title */} //
const App = (props) =>
    <div className="scoreboard">
        <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length}
        />

        {/* Players List */} 
        {props.initialPlayers.map( player =>
        <Player 
            name={player.name} 
            score={player.score}
            key={player.id.toString()}
        />
        )}
    </div>

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
    
);

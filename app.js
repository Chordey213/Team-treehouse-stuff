const players = [
    {name:"Cory",
     score:"50"
    },

    {name:"Lauren",
     score:"90"
    },

    {name:"Arianna",
     score:"85"
    },

    {name:"Teddy",
     score:"80"
    },

    {name:"Tinny",
     score:"50"
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
        totalPlayers={1}
        />

        {/* Players List */} 
        {props.initialPlayers.map(
            
        )}
        <Player name="Cory" score={50}/>
        <Player name="Lauren" score={90}/>
        <Player name="Arianna" score={50}/>
        <Player name="Teddy" score={85}/>
        <Player name="Tinny" score={80}/>
    </div>

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
    
);

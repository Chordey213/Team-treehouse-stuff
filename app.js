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
    <Counter />
</div>

class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore = ()  => {
        this.setState( prevState => ({
            score: prevState.score + 1
            })); 
    }

    decrementScore = ()  => {
        this.setState( prevState => ({
            score: prevState.score - 1
        }));
    }

    render() {
        return (
        <div className="counter">
            <button className="counter-action decrement"onClick={this.decrementScore}> - </button>
            <span className="counter-score">{this.state.score}</span>
            <button className="counter-action increment" onClick={this.incrementScore}> + </button>
        </div>
        );
    }
}

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
            key={player.id.toString()}
        />
        )}
    </div>

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
    
);
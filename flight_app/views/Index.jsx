const React = require('react');
    
const myStyle = {
    color: 'darkblue',
    backgroundColor: 'lightgray',
    };

class Index extends React.Component {
    render() {
        return (
            <div style={myStyle}>
                <h1>See All The flight</h1>
                <ul>
                    {this.props.flight.map((flight, x) => {
                        return(
                            <a href={`/flight/${flight.id}`}>
                                <li>
                                    {flight.airline.charAt(0).toUpperCase() + flight.airline.slice(1)}                                
                                </li>
                            </a>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/flight/new">Create a New flight</a>
                </nav>
                <a href="/"> back </a>
            </div>
        );
    }
}

module.exports = Index;
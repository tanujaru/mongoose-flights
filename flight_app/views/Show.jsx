const React = require('react');
    
const myStyle = {
    color: 'darkgreen',
    backgroundColor: 'lightgray',
    };

class Show extends React.Component {
    render() {
        const flight = this.props.flight;
        return (
            <div style={myStyle}>
                <h1>Flight Details</h1>
                <div>
                Airline: {flight.airline}<br></br>
                Flight number: {flight.flightNo}<br></br>
                <a href={`/flights/add/${flight.id}`}>add destination</a><br></br>
                <a href='/flights'>back</a>
            
            </div>
            </div>
        );
    }
}

module.exports = Show;
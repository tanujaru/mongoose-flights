const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New flight page</h1>
            <form action="/flight" method="POST">
                airline: <input type="text" name="airline" /><br/>
                flightno: <input type="Number" name="flightno" /><br/>
                departs: <input type="Date" name="departs" /><br/>


                <input type="submit" airline="" value="Create flight"/>
             </form>
             <a href="/flight"> back </a>
        </div>);
  }
}

module.exports = New;
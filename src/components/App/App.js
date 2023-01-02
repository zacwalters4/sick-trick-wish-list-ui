import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => this.setState({ tricks: data}))
  }

  newTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form newTrick={this.newTrick} />
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;


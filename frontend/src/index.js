import React, { Component } from 'react';
import { render } from 'react-dom';

const apiUrl = 'http://localhost:8000' 

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch(`${apiUrl}/items`, {
      mode: 'cors',
    })
      .then((res) => res.json(res))
      .then((res) => {
        // console.log(res)
        this.setState({
          items: res.items,
        })
      })
      .catch(() => {
        console.log('fetch failed')
        this.setState({
          items: ['Tokyo', 'Osaka'],
        })
      })
  }

  render() {
    return (
      <div>
        <p>BEST 10</p>
        <ul>
          { 
            this.state.items.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

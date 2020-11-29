import React, { Component } from 'react';
import { render } from 'react-dom';
import "./style.css";

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
      <div className="vertical-table">
        <table className="vertical-table__inner">
          <thead className="vertical-table__headers">
            <tr className="vertical-table__header-row">
              <th className="vertical-table__header vertical-table__header-no">No</th>
              <th className="vertical-table__header">City</th>
            </tr>
          </thead>
          <tbody className="vertical-table__body">
            {
              this.state.items.map((item, index) =>
                <tr key={index} className="vertical-table__body-row">
                  <td className="vertical-table__text">{index + 1}</td>
                  <td className="vertical-table__text">{item}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

import TableView from 'react-table-view'
// import ReactDOM from 'react-dom'
import React, { Component } from 'react'
 
export default class TestComponent extends Component {
  render() {
    /* must ensure all of your fields have values */
    const DATA = [
      { id: 0, make: 'Honda', model: 'NSX', year: '1997', make: 'Honda', model1: 'NSX', year1: '1997', make1: 'Honda', model2: 'NSX', year2: '1997',make11: 'Honda', model21: 'NSX', year21: '1997' },
      { id: 1, make: 'Toyota', model: 'Supra', year: '1996',  make: 'Honda', model1: 'NSX', year1: '1997', make1: 'Honda', model2: 'NSX', year2: '1997',make11: 'Honda', model21: 'NSX', year21: '1997' },
      { id: 2, make: 'Nissan', model: '300ZX', year: '1998',  make: 'Honda', model1: 'NSX', year1: '1997',  make1: 'Honda', model2: 'NSX', year2: '1997',make11: 'Honda', model21: 'NSX', year2: '1997' }
    ]
    /* define the look of each column, OPTIONAL */
    let COLUMNS = {
      make: function(data) {
        return <span>What an awesome year: {data.year}</span>
      },
      model: function(data) {
        return <a>{data.model}</a>
      },
      year: function(data) {
        return (
          <p style={{textAlign: 'left', margin: '0 4px'}}>
            {`Id: ${data.id}`}
            <br />
            {`Year: ${data.year}`}
          </p>
        )
      }
    }
 
    return (
      <div>
        <TableView data={DATA} columns={COLUMNS} />
      </div>
    )
  }
}
 
// ReactDOM.render(<TestComponent />, document.getElementById('root'))
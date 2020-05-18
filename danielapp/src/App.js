import React from "react"
import './App.css';
import Person from './BasicInfo';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person : [
        {
          name : 'Daniel Sanjurjo',
          phone: '000-000-0000',
          DOB: '01/19/2001'
        },
        {
          name : 'Joshua McNeill',
          phone: '000-000-0000',
          DOB: '11/08/2006'
        },
        {
          name : 'Derek Jackson ',
          phone: '000-000-0000',
          DOB: '03/28/1492'
        },
        {
          name : 'David Garcia',
          phone: '000-000-0000',
          DOB: '08/31/1995'
        }
      ]
    }
  }
  render() {
    return (
    <Person person={this.state.person} />
    )
  }
}
export default App;
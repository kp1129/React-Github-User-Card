import React from 'react';
import Usercard from './Usercard';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/kp1129')
    .then(res => {
      this.setState({users: res.data});
      
    })
    .catch(err => console.log(err));

    
  
  }

  componentDidUpdate(){
    axios.get('https://api.github.com/users/kp1129/followers')
    .then(res => {
      this.setState({users: [...this.state.users, res.data]});
      console.log(this.state.users);
    })
    .catch(err => console.log(err));


  }

  render(){
    return (
      <div>
      <h1>hello!</h1>
      
      {/* {this.state.users.map(each => (
        <Usercard data={each} />
      ))} */}
      <Usercard data={this.state.users} />
      {console.log(this.state.users)}
      </div>
    )
  }
}

export default App;

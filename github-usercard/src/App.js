import React from 'react';
import Usercard from './Usercard';
import FollowersList from './FollowersList';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    spotlight: []   
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/kp1129')
    .then(res => {
      this.setState({spotlight: res.data});
      
    })
    .catch(err => console.log(err));  
  }

  

  render(){
    return (
      <div>
      <div className='spotlight'><Usercard data={this.state.spotlight} /></div>
      
      
      


      <FollowersList />
      </div>
    )
  }
}

export default App;

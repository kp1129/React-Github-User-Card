import React from 'react';
import Usercard from './Usercard';
import axios from 'axios';
import './FollowersList.css';

class FollowersList extends React.Component {
    state = {
        followers: []
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/kp1129/followers')
        .then(res => {
            this.setState({followers: res.data})
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div className='followers'>
                {this.state.followers.map(user => (
                    <Usercard data={user} />
                ))}
            </div>
        )
    }
}

export default FollowersList;
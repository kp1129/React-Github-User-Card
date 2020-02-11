import React from 'react';

const Usercard = (props) => {
    return (
        <div>
            <h3>This will be a usercard!</h3>
            <h4>{props.data.login}</h4>
            <img src={props.data.avatar_url} alt={props.data.name} />
            <p>{props.data.name}</p>
        </div>
    )
}

export default Usercard;
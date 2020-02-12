import React from "react";
import "./Usercard.css";

const Usercard = props => {
  return (
    <div className="usercard">
      <img src={props.data.avatar_url} alt={props.data.name} />
      <div>
        <h4>{props.data.login}</h4>      
        <p>{props.data.public_repos}</p>
        <a target="_blank" href={props.data.html_url}>View user profile</a>
      </div>
    </div>
  );
};

export default Usercard;

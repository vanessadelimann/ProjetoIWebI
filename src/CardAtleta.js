import React from 'react';

function CardAtleta(props) {
  return (
    <div className="card">
      <div className="row">
        <h1 className="card-title">{props.player_name}</h1> 
        <div><button onClick={props.onClick} className="card-button">{props.label}</button></div>
      </div>
      <p>Idade: {props.player_age}</p>
      <p>Número: {props.player_number}</p>
      <p>Gols: {props.player_goals}</p>
      <p>Time: {props.team_name}</p>
      <img src={props.player_image} alt={props.player_name} />
    </div>
  );
}

export default CardAtleta;
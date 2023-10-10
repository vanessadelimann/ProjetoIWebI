import React from 'react';
import CardAtleta from './CardAtleta';

function PainelFavoritos({ atletasFavoritos, handleRemoveFromFavoritos }) {
    return (
      <div className='painel'>
        <h3>Painel Favoritos</h3>
        <div className="cards-container">
          {atletasFavoritos.map((atleta, index) => (
            <CardAtleta
              key={index}
              player_name={atleta.player_name}
              player_age={atleta.player_age}
              player_number={atleta.player_number}
              player_goals={atleta.player_goals}
              team_name={atleta.team_name}
              player_image={atleta.player_image}
              label="Remover dos favoritos"
              onClick={() => handleRemoveFromFavoritos(atleta)}
            />
          ))}
        </div>
      </div>
    );
  }  

export default PainelFavoritos;
import React, { useState, useEffect } from 'react';
import CardAtleta from './CardAtleta';
import PainelFavoritos from './PainelFavoritos';
  
function App() {
  const [atletasFavoritos, setAtletasFavoritos] = useState([]);
  const [dadosDosAtletas, setDadosDosAtletas] = useState([]);
  const [textoPesquisa, setTextoPesquisa] = useState('');

  const handleClick = () => {
    fetch('https://apiv3.apifootball.com/?action=get_players&player_name='+textoPesquisa+'&APIkey=2e3f80fc7771827f3d55297a701a0f6cef442b6ed7d184f66f1a4ced574461f7')
      .then((response) => response.json())
      .then((data) => setDadosDosAtletas(data))
      .catch((error) => console.error('Erro ao buscar dados da API:', error));
  };

  const handleClickFavoritos = () => {
    // Mostrar atletas favoritos
    setDadosDosAtletas(atletasFavoritos);
    
  };

  const handleAddToFavoritos = (atleta) => {
    // Adicionar atleta aos favoritos
    setAtletasFavoritos([...atletasFavoritos, atleta]);
  };

  const handleRemoveFromFavoritos = (atleta) => {
    // Remover atleta dos favoritos
    const novoArrayFavoritos = atletasFavoritos.filter((fav) => fav.player_name !== atleta.player_name);
    setAtletasFavoritos(novoArrayFavoritos);
  };

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Buscar atletas</h1>
          <div>
            <input
              type="text"
              placeholder="Nome do Atleta"
              value={textoPesquisa}
              onChange={(event) => setTextoPesquisa(event.target.value)}
            />
            <button onClick={handleClick}>Pesquisar</button>
            
            <button onClick={handleClickFavoritos}>Mostrar favoritos</button>
          
          <PainelFavoritos
            atletasFavoritos={atletasFavoritos}
            handleRemoveFromFavoritos={handleRemoveFromFavoritos}
          />

          </div>
          <h3>Resultados da busca</h3>
          <div className="cards-container">
            {dadosDosAtletas.map((atleta, index) => (
              <CardAtleta
                key={index}
                player_name={atleta.player_name}
                player_age={atleta.player_age}
                player_number={atleta.player_number}
                player_goals={atleta.player_goals}
                team_name={atleta.team_name}
                player_image={atleta.player_image}
                label="Favoritar"
                onClick={() => handleAddToFavoritos(atleta)}
              />
            ))}
          </div>
      </header>
    </div>
  );
}

export default App;

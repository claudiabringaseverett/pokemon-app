import React from 'react';

export default function PokemonList({ pokemon }) {
    return (
      <div className='lh-title pa4 mt0'>
        {pokemon.map(p => (
          <div key={p}>{p}</div>
        ))}
      </div>
    )
  }

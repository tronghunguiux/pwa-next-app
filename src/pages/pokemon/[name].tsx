import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Template from '@/components/template/Template';

interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  };
  types: { type: { name: string } }[];
}

const formatId = (id: number) => `#${id.toString().padStart(4, '0')}`;

const PokemonDetail: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data => setPokemon(data));
    }
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <>
      <Template
        title="Pokemon List"
        description="get catch them all Pokemon"
        image=""
        url="/pokemon"
        classPage="pokemon-detail-page"
        idPage="pokemon_detail_page">
        <div className="">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          <p>Pokedex: {formatId(pokemon.id)}</p>
        </div>

      </Template>
    </>
  );
};
export default PokemonDetail;
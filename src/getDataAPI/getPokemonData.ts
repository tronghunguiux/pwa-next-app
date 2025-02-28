/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
// usePokemonData.ts - Hook để fetch dữ liệu
import { useEffect, useState } from 'react';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
    generation: string;
}

const usePokemonData = (limit: number = 24) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchPokemons = () => {
        if (loading) return;
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(data => {
                const fetches = data.results.map((pokemon: { name: string; url: string }) =>
                    fetch(pokemon.url)
                        .then(res => res.json())
                        .then(details =>
                            fetch(`https://pokeapi.co/api/v2/pokemon-species/${details.name}`)
                                .then(res => res.json())
                                .then(speciesData => ({
                                    id: details.id,
                                    name: details.name,
                                    image: details.sprites.other['official-artwork'].front_default,
                                    types: details.types.map((t: any) => t.type.name),
                                    generation: speciesData.generation.name.replace('generation-', 'Gen ').toUpperCase(),
                                }))
                        )
                );

                Promise.all(fetches).then(newPokemons => {
                    setPokemons(prev => [...prev, ...newPokemons]);
                    setOffset(prev => prev + limit);
                    setLoading(false);
                });
            });
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return { pokemons, fetchPokemons, loading };
};

export default usePokemonData;

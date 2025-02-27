import PokemonItem from "@/components/PokemonItem";
import usePokemonData from "@/getDataAPI/getPokemonData";
import DefaultLayout from "@/template/Template";


const PokemonPage = () => {
    const { pokemons, fetchPokemons, loading } = usePokemonData();
    return (
        <>
            <DefaultLayout classPage={''}>
                {/*<h1>Welcome to Pokémon List</h1>*/}
                <div className={'list_object'}>
                    {pokemons.map((pokemon) => (
                        <PokemonItem key={pokemon.id} {...pokemon} />
                    ))}
                </div>
                <button onClick={fetchPokemons} disabled={loading} className={''}>
                    {loading ? 'Loading...' : 'Get more'}
                </button>
            </DefaultLayout>
        </>

    );
};
export default PokemonPage;

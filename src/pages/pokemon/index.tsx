import PokemonItem from "@/components/PokemonItem";
import Template from "@/components/template/Template";
import usePokemonData from "@/getDataAPI/getPokemonData";

// import '../../../public/resources/scss/stylesheets/pokemon-list.css';
// import '@scss/pages/pokemon-list.scss';
// import '../../assets/scss/pages/pokemon-list.scss';

const PokemonPage = () => {
    const { pokemons, fetchPokemons, loading } = usePokemonData();
    return (
        <>
            <Template
                    title="Pokemon List"
                    description="get catch them all Pokemon"
                    image=""
                    url="/pokemon"
                    classPage="list-pokemon-page"
                    idPage="list-pokemon_page">

                {/*<h1>Welcome to Pokémon List</h1>*/}
                <div className={'list_object'}>
                    {pokemons.map((pokemon) => (
                        <PokemonItem key={pokemon.id} {...pokemon} />
                    ))}
                </div>
                <button onClick={fetchPokemons} disabled={loading} className={''}>
                    {loading ? 'Loading...' : 'Get more'}
                </button>
            </Template>
        </>

    );
};
export default PokemonPage;

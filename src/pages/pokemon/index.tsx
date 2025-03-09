/* eslint-disable @typescript-eslint/no-unused-vars */
import PokemonItem from "@/components/PokemonItem";
import Template from "@/components/template/Template";
import usePokemonData from "@/getDataAPI/getPokemonData";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import '../../../public/assets/cssmin/pages/pokemon-list.css';
const PokemonPage = () => {
    // const { pokemons, fetchPokemons, loading } = usePokemonData();
    const { pokemons } = usePokemonData();
    
    return (
        <>
            <Template
                    title="Pokemon List"
                    description="get catch them all Pokemon"
                    image=""
                    url="/pokemon"
                    classPage="list-pokemon-page"
                    idPage="list-pokemon_page"
                    linkcss={['/assets/cssmin/pages/pokemon-list.css']}>
                    <div className="">
                        <h1>Welcome to Pokémon List</h1>
                    </div>
                {/* <Swiper
                    slidesPerView={6}
                    slidesPerGroup={6}
                    loop={true}
                    grabCursor={true}
                    simulateTouch={true}
                    allowTouchMove={true}
                    mousewheel={true}
                    breakpoints={
                            {
                                320: { slidesPerView: 2, slidesPerGroup: 1 },
                                640: { slidesPerView: 3, slidesPerGroup: 1 },
                                1024: { slidesPerView: 6, slidesPerGroup: 6 }
                            }
                        }
                    >
                    {pokemons.map((pokemon) => (
                        <SwiperSlide key={pokemon.id} className={pokeItem.pokemon_item}>
                            <Link href={`/pokemon/${pokemon.name}`}>
                                <figure className={pokeItem.figure}>
                                    <img src={pokemon.image} alt={pokemon.name} />
                                    {pokemon.generation && <p className={pokeItem.tagGenerate}>{pokemon.generation}</p>}
                                </figure>
                                <div className={pokeItem.info}>
                                    <p className={pokeItem.label}>{pokemon.name}</p>
                                    <PokemonType types={pokemon.types} className={`${pokeItem.type} ${pokeItem.badge}`} />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper> */}
                <div className={'list_object'}>
                    {pokemons.map((pokemon) => (
                        <PokemonItem key={pokemon.id} {...pokemon} />
                    ))}
                </div>
                {/* <button onClick={fetchPokemons} disabled={loading} className={''}>
                    {loading ? 'Loading...' : 'Get more'}
                </button> */}
            </Template>
        </>
    );
};
export default PokemonPage;

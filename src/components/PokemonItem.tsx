import Link from 'next/link';
import PokemonType from './PokemonType';
import '../styles/components/_poke-list.scss';
import '../styles/components/_poke-item.scss';

interface PokemonProps {
    id: number;
    name: string;
    image: string;
    types: string[];
    generation?: string;
}

const formatId = (id: number) => `#${id.toString().padStart(4, '0')}`;

const PokemonItem: React.FC<PokemonProps> = ({ id, name, image, types, generation }) => {
    return (
        <div className="pokemon_item">
            <Link href={`/pokemon/${name}`}>
                <figure className="figure">
                    <img src={image} alt={name} />
                    {generation && <p className="tag-generate">{generation}</p>}
                </figure>
                <div className="info">
                    <p className="label">{name}</p>
                    <p>{formatId(id)}</p>
                    <PokemonType types={types} className="badge" />
                </div>
            </Link>
        </div>
    );
};

export default PokemonItem;
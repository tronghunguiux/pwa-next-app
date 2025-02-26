import '../styles/components/_poke-type.scss'

interface PokemonTypeProps {
    types: string[];
    className: string;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ types, className = '' }) => {
    return (
        <p>
            {types.map(type => (
                <span key={type} className={`type ${className} ${type}`}>{type}</span>
            ))}
        </p>
    );
};

export default PokemonType;

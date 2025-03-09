
interface PokemonTypeProps {
    types: string[];
    className: string;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ types, className = '' }) => {
    return (
        <p className="">
            {types.map(type => (
                // <span key={type} className={`${className} ${pokeType[type]}`}>{type}</span>
                <span key={type} className={`type ${className} ${type}`}>{type}</span>
            ))}
        </p>
    );
};

export default PokemonType;

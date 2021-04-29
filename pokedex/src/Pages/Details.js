import { useParams } from 'react-router-dom';
import CardDetails from '../Components/CardDetails';
import { usePokemonData } from '../hook/usePokemonData';

function Details() {
    const pathParams = useParams();
    const pokeName = pathParams.pokeName
    const [pokeData] = usePokemonData(pokeName)

    return (
        <div>
            { !pokeData ? <p>Carreganodoo...</p> : (

                <CardDetails
                    pokemon={pokeData}
                />

            )}
        </div>
    )

}
export default Details
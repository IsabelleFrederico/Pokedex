import { useParams } from 'react-router-dom';
import BattleActions from '../Components/BattleActions';
import { usePokemonData } from '../hook/usePokemonData';

function Battle() {
    const pathParams = useParams();
    const pokeName = pathParams.pokeName
    const [pokeData] = usePokemonData(pokeName)

return (
    <div>
        { !pokeData ? <p>Carreganodoo...</p> : (
            <div>
                <BattleActions
                    pokemon={pokeData}
                />
            </div>
        )}
    </div>
)

}
export default Battle
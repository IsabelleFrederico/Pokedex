import { Route, Switch } from "react-router-dom";
import Details from '../Pages/Details'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Pokedex from '../Pages/Pokedex'
import Header from '../Components/Header'
import Battle from '../Pages/Battle'


function Router() {
    return (

        <Switch>
            <Route exact path='/' >
                <Home />
            </Route>

            <Route exact path='/pokedex'>
                <Pokedex />
            </Route>

            <Route exact path='/details/:pokeName'>
                <Details />
            </Route>

            <Route exact path='/pokedex/details/:pokeName'>
                <Details />
            </Route>

            <Route exact path='/battle/:pokeName'>
                <Battle />
            </Route>

            <Route>
                <Error />
            </Route>

        </Switch>

    )
}

export default Router
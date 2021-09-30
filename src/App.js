import React from 'react';
import { Route, Switch } from 'react-router';
import CreateCharacter from './Components/CreateCharacter/CreateCharacter';
import Favoritos from './Components/Favoritos/Favoritos';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Personaje from './Components/Personaje/Personaje';

function App() {
    return (
        <>
            
                <Route path='/' component={NavBar} />
                <Route exact path='/' component={Home} />
                <Route exact path='/favorites' component={Favoritos} />
                <Route exact path='/character/:id' component={Personaje} />
                <Route
                    exact
                    path='/create/character'
                    component={CreateCharacter}
                />
           
        </>
    );
}

export default App;

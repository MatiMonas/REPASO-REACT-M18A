import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCharacters, addFavorite } from '../../redux/actions';

//queremos mapear todos los personajes de nuestro estado global
// ---> charactersAll

class Home extends Component {
    componentDidMount() {
        this.props.getCharacters();
    }
    render() {
        return (
            <div>
                <h1>Ricky & Morty</h1>
                <h2>Personajes</h2>
                {/* <button onClick={() => this.props.getCharacters()}>Get Characters</button> */}
                {this.props.personajes?.map((personaje) => (
                    <div key={personaje.id}>
                        <div style={{ display: 'flex' }}>
                            <Link to={`/character/${personaje.id}`}>
                                <h3>Nombre:{personaje.name}</h3>
                            </Link>
                            <button
                                onClick={() =>
                                    this.props.addFavorite(personaje)
                                }
                            >
                                Agregar a favoritos
                            </button>
                        </div>
                        <ul>
                            <li>Status:{personaje.status}</li>
                            <li>Species:{personaje.species}</li>
                        </ul>
                        <img src={personaje.image} alt={personaje.name} />
                    </div>
                ))}
            </div>

            //name , status , species
        );
    }
}

const mapStateToProps = (state) => {
    return {
        personajes: state.charactersAll,
        favorites: state.favoriteCharacters,
    };
};

export default connect(mapStateToProps, { getCharacters, addFavorite })(Home);

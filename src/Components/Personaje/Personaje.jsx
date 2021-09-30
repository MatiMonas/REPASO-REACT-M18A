import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharactersDetail } from '../../redux/actions';

function Personaje(props) {
    const URL_API = 'https://rickandmortyapi.com/api/character';
    const id = props.match.params.id;
    const [character, setCharacter] = React.useState({});
    console.log(character)
    useEffect(() => {
        fetch(`${URL_API}/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setCharacter({
                    name: json.name,
                    species: json.species,
                    status: json.status,
                    origin: json.origin.name,
                    image: json.image,
                    location: json.location.name,
                });
            });
    }, [props, id]);

    console.log('SOY CHARACTEEEEEEEEEEEEEEEEEEEEEEER', character);

    return (
        //name, species, status, origin, image, (location --> name)
        <div>
            {character.name ? (
                <>
                    <div>
                        <h4>Name🧡: {character.name}</h4>
                        <h4>Species: {character.species}</h4>
                        <h4>Status: {character.status}</h4>
                        <h4>Origin: {character.origin}</h4>
                        <h4>Location: {character.location}</h4>
                    </div>

                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                </>
            ) : (
                <h1>AAAAAAAAAAAAAAAAAAAAAAA</h1>
            )}
        </div>
    );
}

export default connect(null, { getCharactersDetail })(Personaje);

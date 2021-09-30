import React from 'react';

function CreateCharacter() {
    const [input, setInput] = React.useState({
        charName: '',
        charLastName: '',
        charAge: '',
    });

    function onChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault()
        alert([input.charName, input.charLastName, input.charAge])
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor=''>
                    Nombre
                    <input type='text' name='charName' onChange={onChange} />
                </label>
                <label htmlFor=''>
                    Apellido
                    <input
                        type='text'
                        name='charLastName'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor=''>
                    Edad
                    <input type='text' name='charAge' onChange={onChange} />
                </label>
                <button type="submit">Enviame</button>
            </form>
        </div>
    );
}

export default CreateCharacter;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Favoritos() {
    let favorites = useSelector(state => state.favoriteCharacters)    
    
    return (
        <div>
           {
               favorites?.map(char => (
                   <div key={char.id}>
                       <h1>Name: {char.name}</h1>
                   </div>
               ))
           }
        </div>
    )
}

export default Favoritos

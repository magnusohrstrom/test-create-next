

const defaultState = {
    breeds:['pump','grump'],
    other:'snail'
}

const reducerCats = (state = defaultState, action) => {
    switch( action.type ) {
        case 'ADD_KITTY': return {...state, breeds:['pump','grump', 'kitty'] }
        default: return state; 
    }    
}

export default reducerCats;
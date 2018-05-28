const defaultState = {
    breeds:['beagle','mutt'],
    other:'snail'
}

const reducerDogs = (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_PUG': return {...state, breeds:['beagle','mutt', 'pug'] }
        default: return state; 
    }    
}

export default reducerDogs;
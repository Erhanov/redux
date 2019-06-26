import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC' :
            return state + 1;
        case 'DEC' :
            return state - 1;
        case 'REC' :
            return 0;
        default : 
            return state;
    } 
}

const inc = () => ({type : 'INC'})
const dec = () => ({type : 'DEC'})
const rec = () => ({type : 'REC'})

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});
document.getElementById('rec').addEventListener('click', () => {
    store.dispatch(rec());
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);


// store.dispatch({type : 'INC'});
// store.dispatch({type : 'INC'});


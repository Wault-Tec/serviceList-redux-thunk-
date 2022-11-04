import {nanoid} from 'nanoid';
import { ADD_SERVICE, FETCH_SERVICES_FAILURE, FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = {
    items:
    [
        {id: nanoid(), name: 'Замена стекла', price: 21000},
        {id: nanoid(), name: 'Замена дисплея', price: 25000},
    ],
    loading: false,
    error: null
};

const serviceListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SERVICES_REQUEST:
            return {...state, loading: true, error: null}
        case FETCH_SERVICES_FAILURE:
            const {error} = action.payload;
            return {...state, loading: false, error}
        case FETCH_SERVICES_SUCCESS:
            const {items} = action.payload;
            return {...state, items, loading: false, error: null};
        case REMOVE_SERVICE:
            const {id} = action.payload;
            return {...state, items: state.items.filter(o => o.id !== id)}
        default: 
            return state
    }
}

export default serviceListReducer


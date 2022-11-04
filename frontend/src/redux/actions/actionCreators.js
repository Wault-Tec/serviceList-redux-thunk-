import { REMOVE_SERVICE, CHANGE_SERVICE_FIELD, FETCH_SERVICES_REQUEST, FETCH_SERVICES_FAILURE, FETCH_SERVICES_SUCCESS, ADD_SERVICE_REQUEST, ADD_SERVICE_FAILURE, ADD_SERVICE_SUCCESS } from "./actionTypes";

export const fetchServicesRequest = () => {
    return {type: FETCH_SERVICES_REQUEST}
};

export const fetchServicesFailure = (message) => {
    return {type: FETCH_SERVICES_FAILURE, payload: {message}}
};

export const fetchServicesSuccess = (items) => {
    return {type: FETCH_SERVICES_SUCCESS, payload: {items}}
}

export const addServiceRequest = () => {
    return {type: ADD_SERVICE_REQUEST}
}

export const addServiceFailure = (message) => {
    return {type: ADD_SERVICE_FAILURE, payload: {message}}
}

export const addServiceSuccess = (items) => {
    return {type: ADD_SERVICE_SUCCESS, payload: {items}}
}

export const changeServiceField = (name, value) => {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export const removeService = (id) => {
    return {type: REMOVE_SERVICE, payload: {id}}
}
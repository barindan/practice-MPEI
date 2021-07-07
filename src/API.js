import { API_METHODS } from "./config";

export const save_user = async (username) => {
    const res = await fetch(API_METHODS.SAVE_USER(username), {
        method: 'GET',
    }).then(response => response.json());
    return res;
}

export const get_user = async (id) => {
    const res = await fetch(API_METHODS.GET_USER(id), {
        method: 'GET',
    }).then(response => response.json());
    return res;
}
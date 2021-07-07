export const BACKEND_HOST = 'http://localhost:8000';

export const API_METHODS = {
    SAVE_USER: (username) => `${BACKEND_HOST}/save_user/${username}`,
    GET_USER: (id) => `${BACKEND_HOST}/get_user/${id}`,
}


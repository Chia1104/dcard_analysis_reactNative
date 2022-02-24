const URL_NOW = "https://dcard-analysis-laravel-fdqsyjapma-de.a.run.app/api/v2";
const URL_DEV = "https://dcard-analysis-laravel-develop-fdqsyjapma-de.a.run.app/api/v2";
const URL_BACKUP = "https://fathomless-fjord-03751.herokuapp.com/api/v2";
const URL_LOCAL = "http://127.0.0.1:8000/api/v2";
const URL = URL_NOW;

export const getAllDcards = async (page, token) => {
    try {
        const response = await fetch(`${URL}/dcard?page=${page}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const searchDcards = async (content, page, token) => {
    try {
        const response = await fetch(`${URL}/searchDcard?search=${content}&page=${page}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getDcardsById = async (id, token) => {
    try {
        const response = await fetch(`${URL}/dcard/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getDcardsByDate = async (date1, date2, page, token) => {
    try {
        const response = await fetch(`${URL}/date/${date1}/${date2}?page=${page}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getTodayDcards = async (page, token) => {
    try {
        const response = await fetch(`${URL}/date/today?page=${page}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getMonthDcards = async (page, token) => {
    try {
        const response = await fetch(`${URL}/date/month?page=${page}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getWeekDcards = async (page, token) => {
    try {
        const response = await fetch(`${URL}/date/week?page=${page}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const login = async (email, password) => {
    try {
        const response = await fetch(`${URL}/login`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const res = await response.json();
        return { message: res.message, token: res.token, name: res.name };
    } catch (error) {
        console.error(error);
    }
}

export const register = async (email, name, password, c_password) => {
    try {
        const response = await fetch(`${URL}/register`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
                c_password: c_password
            })
        });
        const res = await response.json();
        return { message: res.message, token: res.token, name: res.name };
    } catch (error) {
        console.error(error);
    }
}

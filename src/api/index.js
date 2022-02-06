const URL_NOW = "https://dcard-analysis-laravel-fdqsyjapma-de.a.run.app/api";
const URL_BACKUP = "https://fathomless-fjord-03751.herokuapp.com/api";
const URL = "https://dcard-analysis-laravel-fdqsyjapma-de.a.run.app/api";

export const getAllDcards = async (limit, token) => {
    try {
        const response = await fetch(`${URL}/dcard?limit=${limit}`, {
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

export const getAllDcardsBefore = async (beforeId, limit, token) => {
    try {
        const response = await fetch(`${URL}/dcardBefore?beforeId=${beforeId}&limit=${limit}`, {
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

export const searchDcards = async (content, token) => {
    try {
        const response = await fetch(`${URL}/dcardSearch?search=${content}`, {
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
        const response = await fetch(`${URL}/article/${id}`, {
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

export const getDcardsByDate = async (date1, date2, token) => {
    try {
        const response = await fetch(`${URL}/date/${date1}/${date2}`, {
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

export const getTodayDcards = async (token) => {
    try {
        const response = await fetch(`${URL}/date/today`, {
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

export const getMonthDcards = async (token) => {
    try {
        const response = await fetch(`${URL}/date/month`, {
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

export const getWeekDcards = async (token) => {
    try {
        const response = await fetch(`${URL}/date/week`, {
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

export const getGBChart12Data = async (token) => {
    try {
        const response = await fetch(`${URL}/GBChart12Data`, {
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

export const getGBChart4Data = async (token) => {
    try {
        const response = await fetch(`${URL}/GBChart4Data`, {
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

export const getLineChart12Data = async (token) => {
    try {
        const response = await fetch(`${URL}/LineChart12Data`, {
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

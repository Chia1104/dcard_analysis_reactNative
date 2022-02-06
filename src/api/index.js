const URL_NOW = "https://dcard-analysis-laravel-fdqsyjapma-de.a.run.app/api";
const URL_BACKUP = "https://fathomless-fjord-03751.herokuapp.com/api";
const URL = "https://dcard-analysis-laravel-fdqsyjapma-de.a.run.app/api";

export const getAllDcards = async (limit) => {
    try {
        const response = await fetch(`${URL}/dcard?limit=${limit}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getAllDcardsBefore = async (beforeId, limit) => {
    try {
        const response = await fetch(`${URL}/dcardBefore?beforeId=${beforeId}&limit=${limit}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const searchDcards = async (content) => {
    try {
        const response = await fetch(`${URL}/dcardSearch?search=${content}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getDcardsById = async (id) => {
    try {
        const response = await fetch(`${URL}/article/${id}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getDcardsByDate = async (date1, date2) => {
    try {
        const response = await fetch(`${URL}/date/${date1}/${date2}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getTodayDcards = async () => {
    try {
        const response = await fetch(`${URL}/date/today`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getMonthDcards = async () => {
    try {
        const response = await fetch(`${URL}/date/month`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getWeekDcards = async () => {
    try {
        const response = await fetch(`${URL}/date/week`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getGBChart12Data = async () => {
    try {
        const response = await fetch(`${URL}/GBChart12Data`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getGBChart4Data = async () => {
    try {
        const response = await fetch(`${URL}/GBChart4Data`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getLineChart12Data = async () => {
    try {
        const response = await fetch(`${URL}/LineChart12Data`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
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
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            params: {
                'email': email,
                'password': password,
            }
        });
        await response.json();
        return { message: response.message, token: response.token, name: response.name };
    } catch (error) {
        return { message: error.response.message };
    }
}

export const register = async (email, name, password, c_password) => {
    try {
        const response = await fetch(`${URL}/register`, {
            method: 'post',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            params: {
                'email': email,
                'name': name,
                'password': password,
                'c_password': c_password,
            }
        });
        await response.json();
        return {message: response.message, token: response.token, name: response.name };
    } catch (error) {
        return { message: error.response.message };
    }
}

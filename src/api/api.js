const URL = "https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api";
const URL_BACKUP = "https://fathomless-fjord-03751.herokuapp.com/api";

export const getAllDcards = async (limit) => {
    try {
        const response = await fetch(`${URL}/getAllDcard/${limit}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getAllDcardsBefore = async (beforeId, limit) => {
    try {
        const response = await fetch(`${URL}/getAllDcard/before/${beforeId}/${limit}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const searchDcards = async (content) => {
    try {
        const response = await fetch(`${URL}/getAllDcard/search/${content}`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

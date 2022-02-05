import {
    SET_DCARD_DETAIL,
    SET_DCARDS_LIST,
    SET_SEARCH_DCARDS_LIST,
    BEGIN_DCARDS_REQUEST,
    SUCCESS_DCARDS_REQUEST,
    FAIL_DCARDS_REQUEST,
    BEGIN_DCARD_DETAIL_REQUEST,
    SUCCESS_DCARD_DETAIL_REQUEST,
    FAIL_DCARD_DETAIL_REQUEST,
    BEGIN_SEARCH_DCARDS_REQUEST,
    SUCCESS_SEARCH_DCARDS_REQUEST,
    FAIL_SEARCH_DCARDS_REQUEST,
} from "../../utils/constants";
import {
    getAllDcards,
    getAllDcardsBefore,
    searchDcards,
    getDcardsById,
    getDcardsByDate,
    getTodayDcards,
    getMonthDcards,
    getWeekDcards,
} from "../../api";


export const setDcardDetail = (id) => async (dispatch) => {
    dispatch({ type: BEGIN_DCARD_DETAIL_REQUEST });
    try {
        const dcardDetail = await getDcardsById(id);
        dispatch({
            type: SET_DCARD_DETAIL,
            payload: dcardDetail,
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_DCARD_DETAIL_REQUEST, payload: error });
    } finally {
        dispatch({ type: SUCCESS_DCARD_DETAIL_REQUEST });
    }
};

export const setDcardsList = (limit) => async (dispatch) => {
    let allDcards = [];
    dispatch({ type: BEGIN_DCARDS_REQUEST });
    try {
        allDcards = await getAllDcards(limit);
        dispatch({
            type: SET_DCARDS_LIST,
            payload: allDcards,
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_DCARDS_REQUEST, payload: error });
    } finally {
        dispatch({ type: SUCCESS_DCARDS_REQUEST });
    }
};

export const searchDcard = (searchContent) => async (dispatch) => {
    dispatch({ type: BEGIN_SEARCH_DCARDS_REQUEST });
    try {
        const dcardSearch = await searchDcards(searchContent);
        dispatch({
            type: SET_SEARCH_DCARDS_LIST,
            payload: dcardSearch,
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_SEARCH_DCARDS_REQUEST, payload: error });
    } finally {
        dispatch({ type: SUCCESS_SEARCH_DCARDS_REQUEST });
    }
}

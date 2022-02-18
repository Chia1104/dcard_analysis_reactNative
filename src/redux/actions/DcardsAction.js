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
import {logout} from "./AuthAction";


export const setDcardDetail = (id, token) => async (dispatch) => {
    dispatch({ type: BEGIN_DCARD_DETAIL_REQUEST });
    try {
        const dcardDetail = await getDcardsById(id, token);
        dispatch({
            type: SET_DCARD_DETAIL,
            payload: dcardDetail,
        });
        if (dcardDetail.message === "Unauthenticated.") {
            dispatch(logout);
        }
        dispatch({ type: SUCCESS_DCARD_DETAIL_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_DCARD_DETAIL_REQUEST, payload: error });
    }
};

export const setDcardsList = (token) => async (dispatch) => {
    let allDcards = [];
    dispatch({ type: BEGIN_DCARDS_REQUEST });
    try {
        allDcards = await getAllDcards(token);
        dispatch({
            type: SET_DCARDS_LIST,
            payload: allDcards,
        });
        if (allDcards.message === "Unauthenticated.") {
            dispatch(logout);
        }
        dispatch({ type: SUCCESS_DCARDS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_DCARDS_REQUEST, payload: error });
    }
};

export const searchDcard = (searchContent, token) => async (dispatch) => {
    dispatch({ type: BEGIN_SEARCH_DCARDS_REQUEST });
    try {
        const dcardSearch = await searchDcards(searchContent, token);
        dispatch({
            type: SET_SEARCH_DCARDS_LIST,
            payload: dcardSearch,
        });
        if (dcardSearch.message === "Unauthenticated.") {
            dispatch(logout);
        }
        dispatch({ type: SUCCESS_SEARCH_DCARDS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_SEARCH_DCARDS_REQUEST, payload: error });
    }
}

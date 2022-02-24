import {
    SET_DCARD_DETAIL,
    SET_DCARDS_LIST,
    SET_MORE_DCARDS_LIST,
    SET_SEARCH_DCARDS_LIST,
    SET_MORE_SEARCH_DCARDS_LIST,
    BEGIN_DCARDS_REQUEST,
    SUCCESS_DCARDS_REQUEST,
    FAIL_DCARDS_REQUEST,
    BEGIN_MORE_DCARDS_REQUEST,
    SUCCESS_MORE_DCARDS_REQUEST,
    FAIL_MORE_DCARDS_REQUEST,
    BEGIN_DCARD_DETAIL_REQUEST,
    SUCCESS_DCARD_DETAIL_REQUEST,
    FAIL_DCARD_DETAIL_REQUEST,
    BEGIN_SEARCH_DCARDS_REQUEST,
    SUCCESS_SEARCH_DCARDS_REQUEST,
    FAIL_SEARCH_DCARDS_REQUEST,
    BEGIN_MORE_SEARCH_DCARDS_REQUEST,
    SUCCESS_MORE_SEARCH_DCARDS_REQUEST,
    FAIL_MORE_SEARCH_DCARDS_REQUEST,
} from "../../utils/constants";
import {
    getAllDcards,
    searchDcards,
    getDcardsById,
    getDcardsByDate,
    getTodayDcards,
    getMonthDcards,
    getWeekDcards,
    getMoreDcards,
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

export const setDcardsList = (page, token) => async (dispatch) => {
    let allDcards = [];
    dispatch({ type: BEGIN_DCARDS_REQUEST });
    try {
        allDcards = await getAllDcards(page, token);
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

export const setMoreDcardsList = (page, token) => async (dispatch) => {
    let moreDcards = [];
    dispatch({ type: BEGIN_MORE_DCARDS_REQUEST });
    try {
        moreDcards = await getAllDcards(page, token);
        dispatch({
            type: SET_MORE_DCARDS_LIST,
            payload: moreDcards,
        });
        if (moreDcards.message === "Unauthenticated.") {
            dispatch(logout);
        }
        dispatch({ type: SUCCESS_MORE_DCARDS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_MORE_DCARDS_REQUEST, payload: error });
    }
};

export const searchDcard = (searchContent, page, token) => async (dispatch) => {
    dispatch({ type: BEGIN_SEARCH_DCARDS_REQUEST });
    try {
        const dcardSearch = await searchDcards(searchContent, page, token);
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

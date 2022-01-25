import {
    SET_DCARD_DETAIL,
    BEGIN_DCARDS_REQUEST,
    SUCCESS_DCARDS_REQUEST,
    FAIL_DCARDS_REQUEST,
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
} from "../../api/index";


export const setDcardDetail = (id) => async (dispatch) => {
    dispatch({ type: BEGIN_DCARDS_REQUEST });
    try {
        const dcard = await getDcardsById(id);
        if (qty === 0)
            dispatch({
                type: SET_PRODUCT_DETAIL,
                payload: {
                    product,
                },
            });
        else
            dispatch({
                type: SET_PRODUCT_DETAIL,
                payload: {
                    product,
                    qty,
                },
            });
        dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
    }
};

export const setPage = (url, title) => async (dispatch) => {
    let products = [];
    dispatch({ type: BEGIN_PRODUCTS_REQUEST });
    dispatch({
        type: SET_PAGE_TITLE,
        payload: title,
    });
    try {
        products = await getProducts(url);
        dispatch({
            type: SET_PAGE_CONTENT,
            payload: { title, products },
        });
        dispatch({
            type: SET_NAVBAR_ACTIVEITEM,
            payload: url,
        });
        dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
    }
};

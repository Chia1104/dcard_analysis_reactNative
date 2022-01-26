import {
    EXPAND_BOTTOM_SHEET,
    UNEXPAND_BOTTOM_SHEET,
} from "../../utils/constants";

export const expandBottomSheet = (dispatch) => {
    dispatch({ type: EXPAND_BOTTOM_SHEET });
};

export const unexpandBottomSheet = (dispatch) => {
    dispatch({ type: UNEXPAND_BOTTOM_SHEET });
};

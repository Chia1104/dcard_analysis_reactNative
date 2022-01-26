import {EXPAND_BOTTOM_SHEET, UNEXPAND_BOTTOM_SHEET} from "../../utils/constants";

export const bottomSheetReducer = (
    state = {
        expanded: false,
    },
    action
) => {
    switch (action.type) {
        case EXPAND_BOTTOM_SHEET:
            return {
                ...state,
                expanded: true,
            };
        case UNEXPAND_BOTTOM_SHEET:
            return {
                ...state,
                expanded: false,
            };
        default:
            return state;
    }
};

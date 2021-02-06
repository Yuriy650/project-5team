import {FILTER_INCOMES_CATEGORY} from "../types";

export const filterIncomesCategoryReducer = (state=[], action) => {
     switch (action.type) {
        case FILTER_INCOMES_CATEGORY:

            return action.payload


    }
    return state;
}
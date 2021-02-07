import {FILTER_INCOMES_CATEGORY} from "../types";

const filterIncomesCategory = (filterCategory) => {
    return {
        type: FILTER_INCOMES_CATEGORY,
        payload: filterCategory
    }
}

export default filterIncomesCategory;
import {ADD_CATEGORY} from "../types";

const addCategory = (newCategory) => {
    return {
        type: ADD_CATEGORY,
        payload: newCategory
    }
}

export default addCategory;

import {filterIncomesCategoryReducer} from "./filter-incomes-category-reducer";
import {combineReducers} from "redux";
import {addCategoryReducer} from "./add-category-reducer";

export const rootReducer = combineReducers({

    categories: addCategoryReducer
    /*authors: appReducer,
    count:counterLikesReducer*/

});
import {ADD_CATEGORY} from "../types";
import Grid from "@material-ui/core/Grid";
import RestaurantMenuRoundedIcon from "@material-ui/icons/RestaurantMenuRounded";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import PetsIcon from "@material-ui/icons/Pets";
import DescriptionIcon from "@material-ui/icons/Description";
import React from "react";
let initialState =  {
    categories: [
        {category:<Grid align={'center'}><RestaurantMenuRoundedIcon color={"primary"}/>Food </Grid>,
            description: 'ashan', date: '21.01.2021'},
        {category:<Grid align={'center'}><ShoppingBasketIcon color={"primary"}/> Clothes </Grid>,
            description: 'forum', date: '18.01.2021'},
        {category:<Grid align={'center'}><LocalCafeIcon color={"primary"}/>Restaurants</Grid>,
            description: 'kryivka', date: '18.01.2021'},
        {category:<Grid align={'center'}><LocalGasStationIcon color={"primary"}/>Fuel</Grid>,
            description: 'okko', date: '18.01.2021'},
        {category:<Grid align={'center'}><PetsIcon color={"primary"}/>Pets</Grid>,
            description: ')))', date: '18.01.2021'},
        {category:<Grid align={'center'}><DescriptionIcon color={"primary"}/>Utility Bills</Grid>,
            description: 'big bills((', date: '18.01.2021'}
    ]

}
export const addCategoryReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
    }
    return state;
}
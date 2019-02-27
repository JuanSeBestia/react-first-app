import { DISHES } from '../../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    console.log("DISHES:ACTION?", action)
    switch (action.type) {
        default:
            return state;
    }
};
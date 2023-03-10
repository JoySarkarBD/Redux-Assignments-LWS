import { ADD_PRODUCT } from "./actionType";

const initialState = [
    // {
    //     category: "জুতা",
    //     id: "dba819df-b74f-4b74-af82-b14909104c72",
    //     imgUrl: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    //     name: "জুতা",
    //     price: "110",
    //     quantity: "10",
    //     quantityOfCart: 0,
    // }
];

export const addProductReducer = (state = initialState, action) => {
    const { type, payload } = action;

    const imutableState = structuredClone(state);
    switch (type) {

        case ADD_PRODUCT:
            return [
                ...imutableState,
                payload
            ]

        default:
            return state;
    }
} 
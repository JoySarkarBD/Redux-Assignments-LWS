import { ADD_TO_CART, DECREMENT_QUANTITY_CART, REMOVE_TO_CART } from "./actionType";

const initialState = [
    // {
    //     id: "dba819df-b74f-4b74-af82-b14909104c72",
    //     name: "জুতা",
    //     category: "জুতা",
    //     imgUrl: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    //     price: "110",
    //     quantity: 1,
    // }
];

export const addToCartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    // console.log(payload);
    let cloneCartData = structuredClone(state);

    switch (type) {

        case ADD_TO_CART:
            const alreadyAdded = cloneCartData.find(
                item => item.id === payload.id
            )

            if (!alreadyAdded) {
                const newProductToCart = {
                    ...payload,
                    quantityOfCart: 1,
                }

                cloneCartData.push(newProductToCart)

            } else {
                const rest = cloneCartData.filter(existingProduct => existingProduct.id !== payload.id);
                cloneCartData = [
                    ...rest,
                    {
                        ...alreadyAdded,
                        quantityOfCart: alreadyAdded.quantityOfCart += 1,
                    }
                ]

            }

            return cloneCartData;

        case REMOVE_TO_CART:
            return state.filter(item => item.id !== payload);

        case DECREMENT_QUANTITY_CART:
            return state.map(item => {
                if (item.id === payload) {
                    return {
                        ...item,
                        quantityOfCart: item.quantityOfCart - 1,
                    }
                } else {
                    return item;
                }
            })

        default:
            return state;
    }
} 
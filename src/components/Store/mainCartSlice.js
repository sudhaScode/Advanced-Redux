import { createSlice } from "@reduxjs/toolkit";


const initialState = {items:[], cart:false, cartItems: 0};
const mainCartSlice = createSlice({
    name: "shopcart",
    initialState,
    reducers:{
        setShowCart(state){
            state.cart = !state.cart;
        },
        itemsInCart(state, action){
            const newItem = action.payload;
            console.log(newItem);
            const exitingItem = state.items.find(item =>item.id === newItem.id);
            if(!exitingItem){
                state.items.push(newItem);
            }
            else{
                state.items.map(item =>{
                    if (item.id === newItem.id){
                        item.quantity = item.quantity + newItem.quantity;
                        return true;
                    }
                    return true;
                }
                    );
            }
        },
        increaseQuantity(state, action){
            const id = action.payload;
            const exitingItem = state.items.find(item =>item.id === id);
            if(exitingItem){
                state.items.map(item =>{
                    if (item.id === id){
                        item.quantity = item.quantity +1;
                        return true;
                        //console.log(item.quantity);
                    }
                    return true;
                }
                    );
            }

        },
        decreaseQuantity(state, action){
            const id = action.payload;
            const exitingItem = state.items.find(item =>item.id === id);
            if(exitingItem){
                state.items.map(item =>{
                    if (item.quantity<=0){
                        state.items.pop(id);
                        return true;
                    }
                    else{
                    item.quantity = item.quantity -1;
                    //console.log(item.quantity);
                    return false;
                    }
                }
                    );
            }
        },
    }

});

export default mainCartSlice;
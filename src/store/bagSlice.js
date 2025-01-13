import{createSlice} from "@reduxjs/toolkit"; 

const bagSlice=createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addToBag:(store,action)=>{
       store.push(action.payload);//payload mai id ayega uko array mai push 

    },
    removeFromBag:(store,action)=>{
      return store.filter(itemId=>itemId!=action.payload);//here we create a new array and return which id is equal to deleted id it not added
    }
  }
});
export const bagActions=bagSlice.actions;
export default bagSlice;
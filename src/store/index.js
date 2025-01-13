
import{configureStore} from "@reduxjs/toolkit"; 
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";


const myntraStore=configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer
  }
});
export default myntraStore;

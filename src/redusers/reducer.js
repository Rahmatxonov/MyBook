// // import { combineReducers } from 'redux';
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchData = (hurry) => {
//   const thunk = createAsyncThunk("user/fetchData", async () => {
//     const response = await axios.get(
//       `https:www.googleapis.com/books/v1/volumes?q=${hurry}=epub&key=AIzaSyAsATYfUvtkZ5EK4KQ7AXmsj9Mq60S3Z3s`
//     );
//     return response.data;
//   });
//   return thunk;
// };

// const getSlice = createSlice({
//   name: "user",
//   initialState: {
//     users: [],
//   },
//   reducers: {},
//   extraReducers: (build) => {
//     build

//       .addCase(fetchData().pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchData().fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload.items;
//       })
//       .addCase(fetchData().rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default getSlice.reducer;

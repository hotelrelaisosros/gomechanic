import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from './slices/dummySlice';
<<<<<<< HEAD
import cartReducer from './slices/cartSlice';
=======
>>>>>>> 5c64cf2bca709501140b6fc4e4e57f0c40ecbec8

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
<<<<<<< HEAD
    cart: cartReducer,
=======
>>>>>>> 5c64cf2bca709501140b6fc4e4e57f0c40ecbec8
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

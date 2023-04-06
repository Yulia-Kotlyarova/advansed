import { AddNewCommentSchema } from 'features/AddNewComment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AddNewCommentSchema = {
    text: '',
};

export const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchAddNewCommentData.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(fetchAddNewCommentData.fulfilled, (state, action: PayloadAction<AddNewComment>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(fetchAddNewCommentData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;

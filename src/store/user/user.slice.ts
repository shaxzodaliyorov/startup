import { createSlice } from '@reduxjs/toolkit';
import { UserInitialStateType } from './user.interface';

const initialState: UserInitialStateType = {
	user: null,
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {},
});

export const { reducer } = userSlice;

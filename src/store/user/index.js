import { createSlice } from "@reduxjs/toolkit";



const InitialState = {
    name: '',
    id: null
};

export const userSlice = createSlice({
    name: "user",
    initialState: InitialState,

    reducers: {
        setUserInfo: (state, action) => {
            state.name = action?.payload?.name;
            state.id = action?.payload?.id;
        },
        clear: (state) => {
            state = InitialState;
            return state;
        },
    },
});

export const { setUserInfo, clear } =
    userSlice.actions;
export default userSlice.reducer;

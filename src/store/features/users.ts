import { fakeUsers } from '../../common/mock/fakeUsers';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from '../../common/types/Users';


export interface StateUsers {
    users: Users[]
}

const initialState: StateUsers = {
    users: fakeUsers,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers(state: StateUsers, action: PayloadAction<Users>) {
            const user = action.payload
            state.users = [...state.users, user]
        }
    }
})

export const { addUsers } = usersSlice.actions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/index";
import { normalize } from "normalizr";
import { userSchema } from "./usersEntity";
import { isError } from "../../utils/isError";

const data = [
  { id: "123", name: "Jim" },
  { id: "456", name: "Jane" },
];

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (arg: any, { rejectWithValue, fulfillWithValue }) => {
    try {
      const normalized = normalize(data, [userSchema]);
      return fulfillWithValue(normalized.entities.users);
    } catch (e) {
      isError(e);
      return rejectWithValue(e.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] as any },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload
    });
  },
});

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;

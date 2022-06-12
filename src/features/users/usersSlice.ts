import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/index";
import { normalize, schema } from "normalizr";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] as any },
  reducers: {
    fetch: (state) => {
      const data = { users: [{ id: 1 }, { id: 2 }] };
      const user = new schema.Entity("users");
      const customSchema = { users: [user] };

      const normalized = normalize(data, customSchema);
      console.log( normalized.entities);
      state.users = []
    },
  },
});

export const { fetch } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer
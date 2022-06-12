import { Button, Input } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "./usersSlice";
import { fetchUsers } from "./usersSlice";

export function Users() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: 400,
          backgroundColor: "whitesmoke",
          padding: 40,
          borderRadius: 4,
        }}
      >
        <div style={{ marginTop: 30, display: "grid" }}>
          {Object.values(users).map(({ name, id }: any) => (
            <p key={id}>{name}</p>
          ))}
          {/* @ts-ignore */}
          <Button onClick={() => dispatch(fetchUsers())}>fetch users</Button>
        </div>
      </div>
    </div>
  );
}

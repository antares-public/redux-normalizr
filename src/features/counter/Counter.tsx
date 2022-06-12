import { Button, Input } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 400, backgroundColor: 'whitesmoke', padding: 40, borderRadius: 4 }}>
        <div>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
          <span style={{ margin: 30 }}>{count}</span>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
        </div>
        <div style={{ marginTop: 30, display: 'grid' }}>
          <Input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <Button
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </Button>
        </div>
      </div>
    </div>
  );
}

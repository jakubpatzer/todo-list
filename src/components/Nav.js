import React from "react";
import { Button } from "antd";
import 'antd/dist/antd.css';

export const Nav = props => {
  return (
    <div>
      <form onSubmit={props.handleAddItem}>
        <input type="text" value={props.value} onChange={props.handleInput} />
        <Button>Add item</Button>
      </form>
    </div>
  );
};

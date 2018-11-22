import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

export const List = props => {
  return (
    <ul>
      {props.list.map((e, i) => (
        <li key={i}>
          {e}
          <Button onClick={() => props.handleDeleteItem(e, i)}>x</Button>
        </li>
      ))}
    </ul>
  );
};

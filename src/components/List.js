import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

export const List = props => {
  return (
    <ul>
      {props.list.map((e, i) => (
        <li key={i}>
          {e}
          <Button
            type="primary"
            ghost
            icon="delete"
            size={"small"}
            className="list-button"
            onClick={() => props.handleDeleteItem(e, i)}
          />
        </li>
      ))}
    </ul>
  );
};

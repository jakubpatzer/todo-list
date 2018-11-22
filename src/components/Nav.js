import React from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";

const FormItem = Form.Item;

export const Nav = props => {
  return (
    <div className={'nav'}>
      <Form layout="inline" onSubmit={props.handleAddItem}>
        <FormItem>
          <Input type="text" value={props.value} onChange={props.handleInput} />
        </FormItem>
          <FormItem>
              <Button htmlType="submit">Add item</Button>
          </FormItem>
      </Form>
    </div>
  );
};

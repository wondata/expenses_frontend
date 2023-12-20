import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ExpenseForm = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label></Form.Label>
          <Form.Control></Form.Control>
        </Col>
        <Col>
          <Form.Label></Form.Label>
          <Form.Control></Form.Control>
        </Col>
        <div style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button variant="danger">Delete</Button>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="default">Cancel</Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  );
};

export default ExpenseForm;

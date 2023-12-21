import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";

const ExpenseForm = () => {
  const descriptions = [
    "Groceries",
    "Credit Card",
    "Student Loans",
    "Eating Out",
    "Gas",
  ];
  const dispatch = useDispatch();
  const [isNewExpense, setIsNewExpense] = useState(true);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[1]);
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //Create new expense
          NewExpense(dispatch, { description: description, amount: amount });
        } else {
          //edit expense
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            {descriptions.map((d) => (
              <option>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder="0"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Col>
        <Col style={{ marginTop: "auto" }}>
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
        </Col>
      </Row>
    </Form>
  );
};

export default ExpenseForm;

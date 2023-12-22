import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DeleteExpense, EditExpense, NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";

const ExpenseForm = ({ expense, setIsEditing }) => {
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
  const [description, setDescription] = useState(descriptions[0]);

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //Create new expense
          NewExpense(dispatch, { description: description, amount: amount });
        } else {
          //edit expense
          EditExpense(dispatch, {
            id: expense.id,
            description: description,
            amount: amount,
          });
          setIsEditing(false);
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
            placeholder={amount}
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
              <Button
                style={{ marginRight: "2px" }}
                variant="danger"
                onClick={() => {
                  DeleteExpense(dispatch, expense);
                }}
              >
                Delete
              </Button>
              <Button
                style={{ marginRight: "2px" }}
                variant="success"
                type="submit"
              >
                Save
              </Button>
              <Button variant="default" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default ExpenseForm;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Col, Row } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return expenses.map((e) => (
    <div key={e.id} style={{ marginBottom: "1rem" }}>
      <ListRow expense={e} />
    </div>
  ));
};

export default ExpenseList;

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>${expense.amount}</Col>
        <Col>
          <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

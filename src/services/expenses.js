import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
  try {
    //api call
    const expenses = [
      { id: 1, description: "Groceries", amount: 23.16 },
      { id: 2, description: "Gas", amount: 18.52 },
      { id: 3, description: "Student Loans", amount: 600 },
    ];

    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error!");
  }
};

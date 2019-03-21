import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getExpensesTotal from '../selectors/expense-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesTotal, expensesCount }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
            <div className="page-header__actions">
              <Link className="button"to="/create">Add Expense</Link>
            </div>
          </div>   
        </div>  
    );
};

const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expensesTotal: getExpensesTotal(expenses),
        expensesCount: expenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);


import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expense-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesTotal, expensesCount }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div>
            <p>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</p>
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


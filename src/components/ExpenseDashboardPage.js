import React from 'react';
import ExpenseListItem from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseListItem />
    </div>
);

export default ExpenseDashboardPage;
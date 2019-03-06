import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expense-total';

test('Should return 0 if no expenses', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should sum total expenses amount', () => {
    const total = 114195;
    expect(getExpensesTotal(expenses)).toEqual(total);
});
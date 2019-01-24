import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: 1,
        description: 'Gum',
        amount: 19500,
        note: '',
        createdAt: 0
    }, {
        id: 2,
        description: 'Rent',
        amount: 200000,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
        id: 3,
        description: 'Credit Card',
        amount: 150000,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

test('should select expenses by text', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[1]]);
});

test('should sort by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[0]]);
});

test('should sort by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[0], expenses[1]]);
});

test('should short by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should short by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[1], expenses[2], expenses[0]]);
});
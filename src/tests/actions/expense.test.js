import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

//removeExpense test

test("You should setup removeExpense action", () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

//editExpense test

test("You should setup editExpense action", () => {
    const action = editExpense('123abc', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note'
        }
    });
});

//addExpense test

//With provided values

test('You should set up add expense action with provided values', () => {
    const expenseData = {
        description: 'Rent Bill',
        amount: 200000,
        note: 'Rent from my apartament',
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
       expense: {
        ...expenseData,
        id: expect.any(String)
       } 
    });
});

//With default value

test('You should set up add expense action with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
       expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
       } 
    });
});
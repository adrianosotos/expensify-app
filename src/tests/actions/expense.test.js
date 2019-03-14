import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import database from '../../Firebase/firebase';
const createMockStore = configureMockStore([thunk]);


beforeEach(() => {
    const expensesData = {};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

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


test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'mouse',
      amount: 3000,
      note: 'this on is better',
      createdAt: 1000
    };

  store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
    });
});

test('should add expense with default values to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };

  store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseDefaults
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
    });
});

//addExpense test

//With provided values

test('should set up add expense action with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
       expense: expenses[2]
    });
});

test('should set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should remove expense from database', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
    });
});

test('should edit expense from database', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = { description: 'xoxotinha' };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id, 
            updates
        });
        return database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            const val = snapshot.val();
            expect(val.description).toEqual(updates.description);
            done();
        });
    });
});
//With default value

// test('You should set up add expense action with default value', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//        expense: {
//         id: expect.any(String),
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//        } 
//     });
// });
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import database from '../../Firebase/firebase';
const createMockStore = configureMockStore([thunk]);


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
    const expenseData = {
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
            ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
    });
});

//addExpense test

//With provided values

test('You should set up add expense action with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
       expense: expenses[2]
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
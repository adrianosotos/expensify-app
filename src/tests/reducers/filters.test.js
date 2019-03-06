import moment from 'moment';
import filtersReducer from '../../reducers/filters';



test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//should set text filter

test('should set text filter', () => {
    const text = 'bill'
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('bill');
});

//should set startDate filter

test('shold set startDate filter', () => {
    const startDate = 1000;
    const action = { type: 'SET_START_DATE', startDate: 1000 };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(1000);
});

//should set endDate filter

test('shold set endDate filter', () => {
    const endDate = 1000;
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(1000);
});
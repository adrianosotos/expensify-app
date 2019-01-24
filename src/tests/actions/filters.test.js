import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('You have a problem in setStartDate', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('You have a problem in setEndDate', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('You have a problem in setTextFilter with provided text', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    });
});

test('You have a problem in setTextFilter with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('You have a problem in sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
    });
});

test('You have a problem in sortByAmount', () => {
   const action = sortByAmount();
   expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
   }); 
});
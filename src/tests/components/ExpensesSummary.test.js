import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render 2 expenses totalling $94.34', () => {
    const wrapper = shallow(<ExpensesSummary  expensesTotal={9434} expensesCount={2} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render 1 expenses totalling $94.34', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={9434} expensesCount={1} />);
    expect(wrapper).toMatchSnapshot();
});
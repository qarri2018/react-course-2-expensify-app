import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

// Should render the component with one expense
test('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2354848139847} />);
    expect(wrapper).toMatchSnapshot();
});


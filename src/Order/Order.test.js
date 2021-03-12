jest.mock('../utils/getDate');

import React from 'react'
import Order from "./Order";
import {fakeOrders} from "../data/fakeOrders";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {getDate} from '../utils/getDate';

configure({ adapter: new Adapter() });

describe('Order.js', () => {
    beforeEach(() => {
        getDate.mockReturnValue("9 декабря, вс, 2018 год");
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    afterAll(() => {
        jest.resetModules();
    });

    it('render with order', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);

        expect(wrapper).toMatchSnapshot();
    });
});


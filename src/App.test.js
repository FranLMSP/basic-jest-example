import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe("Counter testing", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<App />)
    })

    test('Render the title of counter', () => {
      expect(wrapper.find('h1').text()).toContain("This is counter app")
    })

    test('Render button with text of "increment"', () => {
      expect(wrapper.find('#increment-btn').text()).toBe("Increment")
    })

    test("Render the initial value of state in a div", () => {
      expect(wrapper.find('#counter-value').text()).toBe("0")
    })

    test("Render the click event of increment button and increment the counter value", () => {
      wrapper.find('#increment-btn').simulate('click')
      expect(wrapper.find('#counter-value').text()).toBe("1")
    })

    test('Render button with text of "decrement"', () => {
      expect(wrapper.find('#decrement-btn').text()).toBe("Decrement")
    })

    test("Render the click event of decrement button and decrement the counter value", () => {
      wrapper.find('#increment-btn').simulate('click')
      wrapper.find('#increment-btn').simulate('click')
      wrapper.find('#decrement-btn').simulate('click')
      expect(wrapper.find('#counter-value').text()).toBe("1")
    })

    test("Render increment can't go below zero", () => {
      wrapper.find('#decrement-btn').simulate('click')
      wrapper.find('#decrement-btn').simulate('click')
      wrapper.find('#decrement-btn').simulate('click')
      wrapper.find('#decrement-btn').simulate('click')
      expect(wrapper.find('#counter-value').text()).toBe("0")
    })
})

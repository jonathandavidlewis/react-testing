import React from 'react';
import {shallow} from 'enzyme';
import { Greeting from '../greeting.jsx'

describe('Greeting', async () => {
const helloBtn = sel('dt-hello-btn');
    it('should work', () => {
    const w = mount(<Greeting />)
    await new Promise((resolve) => setTimeout(resolve, 0) }) // forces code below to wait for it!
    console.log(w.debug());
    w.find('Button').simulate('click');
    }
})

// test the deeply rendered elements, not shallow.

//test the click on the unit, not the props...

//test behavior, not integration.

// .debug() returns all that the object contains.

data-test="dt-hello-btn"



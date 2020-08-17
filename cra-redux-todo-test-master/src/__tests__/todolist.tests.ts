import { ListItem } from '../components/listitem';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

describe('ListItem',()=>{

    test('it renders', ()=>{
        const wrapper = shallow(ListItem({title:"title",done:true,toDelate:()=>{}}));
        expect(wrapper).toBeTruthy()
    });

    test('snapshot test',()=>{
        const wrapper = shallow(ListItem({title:"title",done:true,toDelate:()=>{}}));
        expect(wrapper.html()).toMatchSnapshot()
    });
    
    test.todo('displays task name');
    test.todo('take a bool done prop');
    test.todo('function to delete');
})

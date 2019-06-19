/* global expect */
/* global jest */
import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './InputForm'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('calls handleSubmit when button clicked', ()=>{
    var successChecker = false;
    
    var successFunction = ()=>{
        successChecker = true
    }
   const app = mount(<InputForm handleSubmit={successFunction} />)
   app.find('#submit-button').simulate('click')
   expect(successChecker).toEqual(true)
})

it('calls handleSubmit with data', ()=>{
    const successFunction = jest.fn();
    
    const app = mount(<InputForm handleSubmit={successFunction} />)
    
    app.find('#name-input').simulate('change', {target: {name: 'name', value: 'Jane'}})
        app.find('#movie-input').simulate('change', {target: {name: 'movie', value: 'What about Bob?'}})

    app.find('#submit-button').simulate('click')
    
    //{
    //    name: 'Bob'
    //}
    
    expect(successFunction).toBeCalledWith(
        expect.objectContaining({
            name: 'Jane',
            movie: 'What about Bob?'
        }),
    );
    

   
   

})

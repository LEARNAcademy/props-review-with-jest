import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders a LEARN welcome', ()=>{
   const app = mount(<App />)
   expect(app.find('h2').text()).toEqual('Madlibs')
})

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Task from './Task';

describe('<Task />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Task />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('can display a DONE Task', () => {
    const wrapper = shallow(<Task done name="Task1" />);
    expect(wrapper.text()).toEqual('DONE - Task1');
  });

  it('can display a TODO Task', () => {
    const wrapper = shallow(<Task name="Task2" />);
    expect(wrapper.text()).toEqual('TODO - Task2');
  });

  it('calls handleToggleStatus on click', () => {
    const handleToggleStatus = jest.fn();
    const wrapper = shallow(<Task handleToggleStatus={handleToggleStatus} name="Task3" />);
    const task = wrapper.find('li');

    task.simulate('click');
    expect(handleToggleStatus).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const handleToggleStatus = jest.fn();
    const wrapper = renderer.create(<Task handleToggleStatus={handleToggleStatus} name="Task4" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

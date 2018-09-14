import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByText,fireEvent } from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows new text after clicking the button', () => {
  const { container } = render(<App />);
  getByText(container, 'Hello World', {exact: false});
  fireEvent.click(getByText(container, 'Get New Text'), {button: 0})
  getByText(container, (content, element) => !content.startsWith('Hello')) 
})

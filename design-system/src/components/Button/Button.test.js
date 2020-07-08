import Button from './Button';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const LinkWrapper = (props) => <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content

it('sample', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Button to='https://learnstorybook.com' label='Link Text' />
    </MemoryRouter>,
    div
  );

  expect(div.querySelector('a[href="https://learnstorybook.com"]')).toBeNull();
  expect(div.textContent).toEqual('Link Text');

  ReactDOM.unmountComponentAtNode(div);
});

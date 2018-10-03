import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { render } from 'enzyme';

it('renders without crashing', () => {
  let header = render(<Header />);

  expect(header).toMatchSnapshot();
});
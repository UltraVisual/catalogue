import React from 'react';
import ReactDOM from 'react-dom';
import Tiles from './Tiles';

import { render } from 'enzyme';

let actions = {
  getData: jest.fn()
}

it('renders without crashing', () => {
  let tiles = render(<Tiles actions={ actions } />);

  expect(tiles).toMatchSnapshot();
});
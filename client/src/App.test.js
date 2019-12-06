import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

test('App renders without crashing', () => {
  rtl.render(<App />);
});

test('Toggle button is found', () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId(/toggle-button/i);
});

test('Player list is found', () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId(/player-list/i);
});
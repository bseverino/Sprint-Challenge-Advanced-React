import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

test('App renders without crashing', () => {
  rtl.render(<App />);
});

test('Toggle button is found', async () => {
  const { getByTestId } = rtl.render(<App />);
  await getByTestId(/toggle-button/i);
});

test('Player list is found', async () => {
  const { getByTestId } = rtl.render(<App />);
  await getByTestId(/player-list/i);
});

// test('Player cards are found', async () => {
//   const { getAllByLabelText } = rtl.render(<App />);
//   await getAllByLabelText(/player-card/i);
// });
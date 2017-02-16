/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import classy from './classy';

it('creates a function', () => {
  expect(classy.div`foo`).toBeInstanceOf(Function);
});

it('renders', () => {
  const Component = classy.div`foo`;
  const div = document.createElement('div');
  ReactDOM.render(<Component>foo</Component>, div);
});

it('adds classes', () => {
  // const Component = classy.div`foo`;
  // const element = <Component>foo</Component>;
  // expect(element.props.className).toBe('foo'); // ?
});

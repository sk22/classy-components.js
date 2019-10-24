/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import classy from './classy';

it('creates a function', () => {
  expect(classy.div`foo`).toBeInstanceOf(Function);
});

it('renders w/ classnames that are passed in', () => {
  const Component = classy.div`foo`;
  const div = document.createElement('div');
  ReactDOM.render(<Component>foo</Component>, div);
  expect(div.getElementsByClassName('foo')).toHaveLength(1);
});

it('renders with additional classnames, if passed in through the prop, does not override', () => {
  const Component = classy.div`foo`;
  const div = document.createElement('div');
  ReactDOM.render(<Component className="otherClassName">foo</Component>, div);
  const divsWithClassName = div.getElementsByClassName('otherClassName');
  expect(divsWithClassName).toHaveLength(1);
  expect(divsWithClassName[0].className).toContain('otherClassName');
  expect(divsWithClassName[0].className).toContain('foo');
});

it('renders with additional classnames, if passed in through the prop, does not override; works with extensions and std function notation', () => {
  const Button = classy.button(`btn-default`);
  const PrimaryButton = classy(Button)(`btn-primary`);
  const div = document.createElement('div');
  ReactDOM.render(<PrimaryButton className="addedClass">foo</PrimaryButton>, div);
  const divsWithClassName = div.getElementsByClassName('addedClass');
  expect(divsWithClassName).toHaveLength(1);
  expect(divsWithClassName[0].className).toContain('btn-default');
  expect(divsWithClassName[0].className).toContain('btn-primary');
  expect(divsWithClassName[0].className).toContain('addedClass');
});

it('renders properly with the array notation, and passed in props class name should work', () => {
  const PrimaryButton = classy.button([`btn-default`, 'btn-primary']);
  const div = document.createElement('div');
  ReactDOM.render(<PrimaryButton className="addedClass">foo</PrimaryButton>, div);
  const divsWithClassName = div.getElementsByClassName('addedClass');
  expect(divsWithClassName).toHaveLength(1);
  expect(divsWithClassName[0].className).toContain('btn-default');
  expect(divsWithClassName[0].className).toContain('btn-primary');
  expect(divsWithClassName[0].className).toContain('addedClass');
});
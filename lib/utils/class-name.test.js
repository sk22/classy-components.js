/* eslint-disable no-undef */

import { buildClassName } from './class-name';

it('joins classes as expected', () => {
  expect(buildClassName`
    foo
    bar
  `).toBe('foo bar');
  expect(buildClassName(['foo', 'bar'])).toBe('foo bar');
  expect(buildClassName('foo bar')).toBe('foo bar');
});

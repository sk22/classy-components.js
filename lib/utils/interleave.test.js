/* eslint-disable no-undef */

import interleave from './interleave';

it('interleaves as expected', () => {
  expect(interleave`foo ${'bar'} baz`).toEqual(['foo ', 'bar', ' baz']);
});

// Taken from styled components
// Copyright © 2016 Glen Maddern and Maximilian Stoiber
// https://github.com/styled-components/styled-components/blob/master/src/utils/interleave.js

export default (strings, ...interpolations) => (
  interpolations.reduce((array, interp, i) => (
    array.concat(interp, strings[i + 1])
  ), [strings[0]])
);

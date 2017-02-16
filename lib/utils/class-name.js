import classnames from 'classnames';
import interleave from './interleave';

export const optimizeClassName =
  string => string.replace(/\s\s+/g, ' ').trim();

// classed.div(['top', 'left']);
// classed.div('top left');
// classed.div(classnames('top', 'left'));
// classed.div`top left`;

export const buildClassName = (strings, ...interpolations) => {
  if (interpolations.length) { // is template string
    return optimizeClassName(
      classnames(interleave(strings, ...interpolations)),
    );
  } else if (strings instanceof Array) { // is array
    return optimizeClassName(strings.join(' '));
  }
  // is string
  return strings;
};

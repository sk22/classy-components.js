import { createElement } from 'react';
import classnames from 'classnames';
import domElements from './utils/dom-elements';
import { buildClassName } from './utils/class-name';

const classy = (tag, parentClassName) => (strings, ...interpolations) => {
  const className =
    classnames(parentClassName, buildClassName(strings, ...interpolations));
  // eslint-disable-next-line
  const ClassyComponent =
    props => createElement(tag,
      { ...props, className: classnames(props.className, className) },
      props.children);
  ClassyComponent.classy = { tag, className };
  return ClassyComponent;
};

const classyComponent = ClassyComponent => (strings, ...interpolations) => {
  if (!ClassyComponent.classy) {
    throw new Error('Only existing components that classes were added to via ' +
      'classy-components can be extended this way.');
  }

  const { tag, className } = ClassyComponent.classy;
  return classy(tag, className)(strings, ...interpolations);
};

const classyElements = domElements.reduce(
  (obj, val) => Object.assign(obj, { [val]: classy(val) }), {},
);

export default Object.assign(classyComponent, classyElements);

// withClasses(Header)`bg-red`;

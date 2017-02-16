# <🎩>
# classy components

inspired by [styled components][styled]

[![npm downloads](https://img.shields.io/npm/dt/classy-components.svg?style=flat-square)][npm]
[![npm](https://img.shields.io/npm/v/classy-components.svg?style=flat-square)][npm]

Classy Components creates React components that have certain CSS classes.

```javascript
import classy from 'classy-components';
import './style.css';

const Red = classy.div`red-bg`

export default () => <Red>I have a red background!</Red>
// => <div class="red-bg">I have a red background!</div>
```

```css
.red-bg {
  background: red;
}
```

## Installation
Use `yarn` or `npm` to include it into your React project.

```
yarn add classy-components
```

## Usage
Using template literals, you can spread a list of classes over many lines.
This comes in useful when you're using some CSS framework like
[Material Components Web][mdc].

```javascript
const Toolbar = classy.div`
  mdc-theme--primary-bg
  mdc-theme--text-primary-on-primary
  mdc-typography--title
  mdc-elevation--z4
`;
```

Another way is to use an array.

```javascript
const Toolbar = classy.div([
  'mdc-theme--primary-bg',
  'mdc-theme--text-primary-on-primary',
  'mdc-typography--title',
  'mdc-elevation--z4',
]);
```

You can also just pass in a regular string.

```javascript
const Button = classy.button('btn');
```

## Inheritance
If you need your components to have additional classes while inheriting the
parent's ones, you can do that as follows.

```javascript
const Button = classy.button('btn');
// => <button class="btn">

const PrimaryButton = classy(Button)('btn-primary');
// => <button class="btn btn-primary">
```

You can also use the other syntaxes such as the template literal with this.

```javascript
const SecondaryButton = classy(Button)`btn-secondary`;
// => <button class="btn btn-secondary">
```


### Similar
You might be interested in [@mephju][mephju]'s [classed-components][classed].
It is basically another implementation of about the same features.

[styled]: https://github.com/styled-components/styled-components/
[classed]: https://github.com/mephju/classed-components/
[mephju]: https://github.com/mephju/
[mdc]: https://github.com/material-components/material-components-web/
[classnames]: https://github.com/JedWatson/classnames
[npm]: https://www.npmjs.com/package/classy-components

### License
[MIT](https://github.com/sk22/classy-components.js/blob/master/LICENSE)

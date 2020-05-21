<div align="center">

# ⚛️ React lifecycle hooks 🍥🎣

React class component lifecycle methods re-implemented as hooks

Easiest way to migrate class components to hooks ✌️

[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![Bundlephobia][bundle-phobia-badge]][bundle-phobia]

[![Star on GitHub][github-star-badge]][github-star]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Twitter Follow][twitter-badge]][twitter]

---

### PRs Welcome 👍✨

</div>

- 📦 [Installation](#installation)
- ℹ️ [Usage](#usage)
- 💡 [Examples](#examples)

## Motivation

While converting class components to hooks, I found it quite annoying to write new useEffect & useRef logic to implement the same lifecycle methods I already had. So thought I could just re-implement the lifecycle methods & states as hooks to simplify the process and it turned out to be a quick drop-in replacement for the class components 😎✨

### With class components

```jsx
import React, { Component } from "react";

class LegacyComponent extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    document.title = "Legacy Component";
  }

  componentDidMount() {
    this.setState({
      text: "component mounted!",
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}
```

### With lifecycle-hooks

```jsx
import React from "react";
import {
  useState,
  useConstructor,
  useDidMount,
} from "@daniakash/lifecycle-hooks";

const NewComponent = () => {
  const [state, setState] = useState({
    text: "",
  });

  useConstructor(() => {
    document.title = "Legacy Component";
  });

  useDidMount(() => {
    setState({
      text: "component mounted!",
    });
  });

  return (
    <div>
      <h3>{this.state.text}</h3>
    </div>
  );
};
```

## Installation

```sh
yarn add @daniakash/lifecycle-hooks

# or

npm i @daniakash/lifecycle-hooks
```

## Usage

```jsx
import {
  useState,
  useConstructor,
  useDidMount,
  useDidUpdate,
  useWillUnmount,
} from "@daniakash/lifecycle-hooks";
```

### useState

`useState` behaves in the same way as `this.state` in class components. However it is different from React's usual `useState` hook cuz here it only accepts objects.

#### traditional class state

```jsx
// Initialization
this.state = {
  name: "",
  email: "",
};

// updating name
this.setState({
  name: "John Doe",
});
```

#### lifecycle-hook's `useState`

```jsx
// Initialization
const [state, setState] = useState({
  name: "",
  email: "",
});

// updating name
setState({
  name: "John Doe",
});
```

### All the other hooks

As their name suggests, the following hooks are straight forward to use and they will execute the callback function at the respective component lifecycle.

- `useConstructor`
- `useDidMount`
- `useDidUpdate`
- `useWillUnmount`

Refer the example for the playground where you can experiment with these lifecycle methods

## Examples

- Lifecycle hooks codesandbox playground

[bundle-phobia-badge]: https://badgen.net/bundlephobia/minzip/@daniakash/lifecycle-hooks
[bundle-phobia]: https://bundlephobia.com/result?p=@daniakash/lifecycle-hooks
[downloads-badge]: https://img.shields.io/npm/dm/@daniakash/lifecycle-hooks.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/@daniakash/lifecycle-hooks
[package]: https://www.npmjs.com/package/@daniakash/lifecycle-hooks
[version-badge]: https://img.shields.io/npm/v/@daniakash/lifecycle-hooks.svg?style=flat-square
[twitter]: https://twitter.com/dani_akash_
[twitter-badge]: https://img.shields.io/twitter/follow/dani_akash_?style=social
[github-watch-badge]: https://img.shields.io/github/watchers/DaniAkash/lifecycle-hooks.svg?style=social
[github-watch]: https://github.com/DaniAkash/lifecycle-hooks/watchers
[github-star-badge]: https://img.shields.io/github/stars/DaniAkash/lifecycle-hooks.svg?style=social
[github-star]: https://github.com/DaniAkash/lifecycle-hooks/stargazers

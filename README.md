# react-modal
This package is a part of an OpenClassrooms school project.

## Installation
You need to use `node >= 14` and `npm >= 5.6`.
Run the following command on your project to install the package.

```shell
npm i @fster/react-modal@latest 
```

## Dependencies
This package use `react@18.2.0` as peer dependencies.

## How to use ?
Props `title` and `text` are necessary.
Use `ìsVisible` boolean props to render the modal.
The default `target` is `document.body`. 

- Props type
```ts
export interface ModalProps {
  title: string;
  text: string;
  isVisible: Boolean;
  target: Element | DocumentFragment;
}
```

- Example
```jsx
import { Modal } from '@fster/react-modal'

function App () {
  return (
    <div className="App">
      <Modal
        title= 'Your Title'
        text= 'Your content text'
        isVisible= {true}
        target= {document.body}
      />
    </div>
  );
}

export default App;
```

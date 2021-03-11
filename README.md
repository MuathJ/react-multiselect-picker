# react-multiselect-picker

> React Multi-Select Picker Component

[![NPM](https://img.shields.io/npm/v/react-multiselect-picker.svg)](https://www.npmjs.com/package/react-multiselect-picker)

![React Multi-Select Picker Component Image](image.png)

## Demo
Live Preview: [https://multiselect-picker.netlify.app](https://multiselect-picker.netlify.app)

Codesandbox: [https://codesandbox.io/s/react-multiselect-picker-m5p0p](https://codesandbox.io/s/react-multiselect-picker-m5p0p)

## Install

```bash
npm install --save react-multiselect-picker
```

## Usage

Codesandbox: [https://codesandbox.io/s/react-multiselect-picker-component-zdbu7](https://codesandbox.io/s/react-multiselect-picker-component-zdbu7)

```jsx
import React from 'react'

import MultiSelectPicker from 'react-multiselect-picker'
import 'react-multiselect-picker/dist/styles.css'

const items=[
    'Budget',
    'Food allergies',
    'Number of people',
    'Special restrictions'
];

const App = () => {
  return <MultiSelectPicker options={items}/>
}

export default App

```

## Component Usage

```jsx
<MultiSelectPicker options={[ 'option 1', 'option 2', 'option 3', 'option 4' ]}/>
```



## License

MIT © [MuathJ](https://github.com/MuathJ)

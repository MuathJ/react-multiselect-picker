import React from 'react'

import MultiSelectPicker from 'react-multiselect-picker'
import 'react-multiselect-picker/src/index.css'

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
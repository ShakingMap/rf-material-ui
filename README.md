# RF material-ui
[rf-form](https://github.com/ShakingMap/rf-form) components suit for material-ui.

This docs list the components of this suit. refer to [rf-form](https://github.com/ShakingMap/rf-form#apis) to see default apis.

## Installation
- install material-ui from npm. this package is roughly tested with material-ui 0.15.0
- `npm install --save rf-material-ui`

## Components

### Wrapper

### Group

### Array

### Fields

#### Input
this is a general input field. all other props will be passed down to the inner input component.

#### Text
- value - string

#### Textarea
- value - string

#### Number
- value - number

#### Password
- value - string
- display - optional 'show' or 'hide'

#### File
NOT IMPLEMENTED

#### Date
NOT IMPLEMENTED

#### DatetimeLocal
NOT IMPLEMENTED

#### Checkbox
- value - bool
- label - string

#### CheckboxGroup
- value - array of string
- items - object as {key: {label, readOnly, disabled}} or {key:label}, each key is for one item
- inline - bool. if true, display as inline style

#### RadioGroup
- value - string
- items - object as {key: {label, readOnly, disabled}} or {key:label}, each key is for one item
- inline - bool. if true, display as inline style

#### Select
- value - string
- items - object as {key: {label, readOnly, disabled}} or {key:label}, each key is for one item

#### MultipleSelect
NOT IMPLEMENTED

## License
ISC
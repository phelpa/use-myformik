# `React use-myformik`
## Install

```sh
yarn add use-myformik
```

## Usage

use-myformik is a set of components that uses formik hook and material-ui to simplify building forms. It also has a removeEmptyValues prop which removes empty properties from the values that formik gives.

```jsx
import { useMyFormik, MyFormikField, MyForm } from 'use-myformik'

const MyFormikTest = () => {
  const formik = useMyFormik({
    initialValues: {
      field1: '',
      field2: ''
    },
    onSubmit: values => console.log(values),
    removeEmptyValues: true //removes empty properties from values
  })

  return (
    //all of the formik helpers is passed through context to the fields
    <MyForm context={formik}> 
      <MyFormikField
        name="field1" 
        label="field1"
      />
      <MyFormikField //the field has better default props than material-ui ones
        name="field2" //which makes it much cleaner to use
        label="field2" //you can also use any material-ui field props
      />
       <Button type='submit'>Submit</Button>
    </MyForm>
  )
}
```


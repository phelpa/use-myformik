
import useMyFormik from './useMyFormik'
import MyFormikField from './MyFormikField'
import MyForm from './MyForm'
import Validation from './validation'
import { Button } from '@material-ui/core'

const MyFormikTest = () => {
  const formik = useMyFormik({
    initialValues: {
      field1: '',
      field2: ''
    },
    onSubmit: values => console.log(values, 'values on onSubmit'),
    validationSchema: Validation,
    removeEmptyValues: true
  })

  return (
    <MyForm context={formik}>
      <MyFormikField
        name="field1"
        label="field1"
      />
      <MyFormikField
        name="field2"
        label="field2"
      />
       <MyFormikField
        name="field3"
        label="field3"
      />
       <Button type='submit'>Submit</Button>
    </MyForm>
  )
}

export default MyFormikTest
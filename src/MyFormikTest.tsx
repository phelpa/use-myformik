
import useMyFormik from './useMyFormik'
import MyFormikField from './MyFormikField'
import MyForm from './MyForm'
import Validation from './validation'

const MyFormikTest = () => {
  const formik = useMyFormik({
    initialValues: {
      aldair: ''
    },
    onSubmit: values => console.log(values),
    validationSchema: Validation
  })

  return (
    <MyForm context={formik}>
      <MyFormikField
        size="small"
        fullWidth
        margin="normal"
        name="aldair"
        label="Título"
        type="text"
        variant="outlined"
        helperText='grande dia'
      />
      <MyFormikField
        size="small"
        fullWidth
        margin="normal"
        name="pereira"
        label="Título"
        type="text"
        variant="outlined"
      />
    </MyForm>
  )
}

export default MyFormikTest
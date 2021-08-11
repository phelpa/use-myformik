
import useMyFormik from './useMyFormik'
import MyFormikField from './MyFormikField'
import MyForm from './MyForm'

const MyFormikTest = () => {
  const formik = useMyFormik({
    initialValues: {
      aldair: ''
    },
    onSubmit: values => console.log(values),
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
      />
    </MyForm>
  )
}

export default MyFormikTest
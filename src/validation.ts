import * as Yup from 'yup'

const Validation = Yup.object().shape({
  field1: Yup.string().required('Required Field'),
  field2: Yup.string().required('Required Field')
})

export default Validation;

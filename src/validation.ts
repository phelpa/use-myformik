import * as Yup from 'yup';

const Validation = Yup.object().shape({
  aldair: Yup.string().required('Required Field'),
});

export default Validation;

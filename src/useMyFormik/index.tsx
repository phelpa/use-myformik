import { useFormik, FormikConfig, FormikProps } from 'formik'

export interface IUseFormParams<Values> extends FormikConfig<Values> {
  ople?: string
}

function useMyFormik<T>(config: IUseFormParams<T>): FormikProps<T> {
  const formik = useFormik(config)

  console.log(formik, 'olha o formik')
  return formik
}

export default useMyFormik

import { FormikConfig, FormikProps } from 'formik'
import { TextFieldProps } from '@material-ui/core'

interface IUseFormParams<Values> extends FormikConfig<Values> {
  removeEmptyValues?: boolean
}

export function useMyFormik<T>(config: IUseFormParams<T>): FormikProps<T> 

interface IFormProps {
  context: FormikProps<any>
  children?: React.ReactNode
}

export const MyForm: React.NamedExoticComponent<IFormProps>

export const MyFormikField: React.FC<TextFieldProps>




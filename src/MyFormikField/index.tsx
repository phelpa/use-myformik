import React from 'react'
import { TextField as TextFieldMUI, TextFieldProps } from '@material-ui/core'
import { FormFieldsContext } from '../MyForm'

const MyFormikField: React.FC<TextFieldProps> = ({
  name,
  ...textFieldProps
}) => {
  const form = React.useContext(FormFieldsContext)

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value ?? ''

      form.setFieldValue(name as string, value)
    },
    [form, name]
  )
  
  const errorMessage = form.errors[name]

  return (
    <TextFieldMUI 
      {...textFieldProps}
      onChange={handleChange} 
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : textFieldProps.helperText}
    />
  )
}

export default MyFormikField

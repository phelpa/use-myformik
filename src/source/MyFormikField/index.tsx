import React from 'react'
import { TextField as TextFieldMUI, TextFieldProps } from '@material-ui/core'
import { FormFieldsContext } from '../MyForm'

export const MyFormikField: React.FC<TextFieldProps> = ({
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

  const errorMessage = form?.errors?.[name as string]

  return (
    <TextFieldMUI
      size="small"
      margin="normal"
      variant="outlined"
      type="text"
      fullWidth
      {...textFieldProps}
      onChange={handleChange}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : textFieldProps.helperText}
    />
  )
}

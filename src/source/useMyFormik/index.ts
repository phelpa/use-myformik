import { useFormik, FormikConfig, FormikProps } from 'formik'
import { useEffect, useCallback } from 'react'

export interface IUseFormParams<Values> extends FormikConfig<Values> {
  removeEmptyValues?: boolean
}

const removeEmptyPropertiesFromObject = (obj: any) => {
  Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k])
  return obj
}

export function useMyFormik<T>(config: IUseFormParams<T>): FormikProps<T> {

  const formik = useFormik(config)

  const { setValues, values } = formik

  const formValues = useCallback((values) => {
    const cleanObj = removeEmptyPropertiesFromObject(values)
    return cleanObj
  }, [])

  useEffect(() => {
    if(config.removeEmptyValues) {
      setValues(formValues, false)
    }
  }, [setValues, formValues, values, config.removeEmptyValues])

  return formik
}
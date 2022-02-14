import { useFormik, FormikConfig, FormikProps } from 'formik'
import { useEffect, useCallback } from 'react'

export interface IUseFormParams<Values> extends FormikConfig<Values> {
  removeEmptyValues?: boolean
  removeEmptySpace?: boolean
}

const removeEmptyPropertiesFromObject = (obj: any) => {
  Object.keys(obj).forEach(
    (k) => !obj[k] && obj[k] !== undefined && delete obj[k]
  )
}

const removeEmptySpace = (obj: any) => {
  Object.keys(obj).map(
    (k) => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])
  )
}

export function useMyFormik<T>(config: IUseFormParams<T>): FormikProps<T> {
  const formik = useFormik(config)

  const { setValues, values } = formik

  const removeEmptyProperties = useCallback((values) => {
    removeEmptyPropertiesFromObject(values)
  }, [])

  useEffect(() => {
    if (config.removeEmptyValues) {
      removeEmptyProperties(values)
    }
  }, [setValues, values, removeEmptyProperties, config.removeEmptyValues])

  useEffect(() => {
    if (config.removeEmptySpace) {
      removeEmptySpace(values)
    }
  }, [setValues, values, config.removeEmptySpace])

  return formik
}

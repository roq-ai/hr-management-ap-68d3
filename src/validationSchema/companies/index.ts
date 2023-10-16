import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  image: yup.string().nullable(),
  number_of_employees: yup.number().integer().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

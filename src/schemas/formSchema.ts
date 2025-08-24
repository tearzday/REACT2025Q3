import * as yup from 'yup';
import { countries } from '../data/countries';

const countryEnum = countries;

export const formSchema = yup.object({
  name: yup
    .string()
    .required('Name cannot be empty')
    .min(2, 'Min 2 characters')
    .test(
      'starts-with-uppercase',
      'Name must start with an uppercase letter',
      (val) => (val ? val[0] === val[0].toUpperCase() : false)
    ),

  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(10, 'Age must be at least 10'),

  email: yup.string().required('Email is required').email('Incorrect email'),

  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),

  repeatPassword: yup
    .string()
    .required('Repeat password')
    .oneOf([yup.ref('password')], "Passwords don't match"),

  gender: yup.mixed<'man' | 'woman'>().required('Gender is required'),

  terms: yup.boolean().required('T&C is required'),

  file: yup
    .mixed<File>()
    .required('File is required')
    .test('fileSize', 'File size should be less than 1MB', (file) =>
      file instanceof File ? file.size <= 1_000_000 : false
    )
    .test('fileType', 'Only PNG and JPEG files are allowed', (file) =>
      file instanceof File
        ? ['image/png', 'image/jpeg'].includes(file.type)
        : false
    ),

  country: yup
    .string()
    .required('Country is required')
    .oneOf(countryEnum, 'Select valid country'),
});

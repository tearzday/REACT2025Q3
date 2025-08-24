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

  password: yup.string().required('Password is required'),

  repeatPassword: yup
    .string()
    .required('Repeat password')
    .oneOf([yup.ref('password')], "Passwords don't match"),

  gender: yup.mixed<'man' | 'woman'>().required('Gender is required'),

  terms: yup.boolean().oneOf([true], 'T&C is required').required(),

  file: yup
    .mixed<FileList | string>()
    .required('File is required')
    .test('fileType', 'Only PNG and JPEG', (value) => {
      if (typeof value === 'string') {
        return /^data:image\/(png|jpeg);base64,/.test(value);
      }

      if (value instanceof FileList) {
        if (value.length === 0) return false;
        const file = value[0];
        return ['image/png', 'image/jpeg'].includes(file.type);
      }

      return false;
    })
    .test('fileSize', 'File size should be less than 1MB', (value) => {
      if (typeof value === 'string') {
        const sizeInBytes = Math.ceil((value.length * 3) / 4);
        return sizeInBytes <= 1_000_000;
      }

      if (value instanceof FileList) {
        if (value.length === 0) return false;
        const file = value[0];
        return file.size <= 1_000_000;
      }

      return false;
    }),

  country: yup
    .string()
    .required('Country is required')
    .oneOf(countryEnum, 'Select valid country'),
});

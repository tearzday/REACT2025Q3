import { z } from 'zod';
import { countries } from '../data/countries';

export const formSchema = z
  .object({
    name: z
      .string()
      .nonempty('Name cannot be empty')
      .min(2, 'Min 2 characters')
      .refine(
        (val) => val && val.length > 0 && val[0] === val[0].toUpperCase(),
        {
          message: 'Name must start with an uppercase letter',
        }
      ),
    age: z.coerce.number().min(10, 'Age must be at least 10'),
    email: z.email('Incorrect email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
        'Password must contain uppercase, lowercase, number, and special character'
      ),
    repeatPassword: z.string().min(1, 'Repeat password'),
    gender: z.enum(['man', 'woman'], {
      message: 'Please select a gender',
    }),
    terms: z.preprocess(
      (value) => value === 'on',
      z.boolean().refine((val) => val === true, 'T&C is required')
    ),
    file: z
      .file()
      .max(1_000_000, 'File size should be less than 1MB')
      .mime(['image/png', 'image/jpeg'], 'Only PNG and JPEG files are allowed'),
    country: z.enum(countries, 'Select valid country'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  });

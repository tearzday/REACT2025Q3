import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Min 2 characters')
    .refine((val) => val[0] === val[0].toUpperCase(), {
      message: 'Name must start with an uppercase letter',
    }),
  age: z.coerce.number().min(0, 'Age must be a positive number'),
  email: z.email('Incorrect email'),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
  repeatPassword: z.string(),
  gender: z.enum(['man', 'woman'], {
    message: 'Please select a gender',
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
  file: z
    .file()
    .max(1_000_000, 'File size should be less than 1MB')
    .mime(['image/png', 'image/jpeg'], 'Only PNG and JPEG files are allowed'),
  country: z.string(),
});

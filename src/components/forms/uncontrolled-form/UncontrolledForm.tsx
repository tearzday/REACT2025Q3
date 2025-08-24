import { useState, type FormEvent } from 'react';
import {
  formsGetCountries,
  formsSetData,
  useForms,
} from '../../../hooks/useForms';
import InputDefault from '../../UI/input';
import { formSchema } from '../../../schemas/formSchema';
import RadioList from '../../UI/radio-list';
import CheckboxDefault from '../../UI/checkbox';
import AddFile from '../../UI/add-file';
import DataList from '../../UI/datalist';
import ButtonDefault from '../../UI/button';
import type { FormDataErrors } from '../../../types';
import { ValidationError } from 'yup';
import fileToBase64 from '../../../utils/convertToBase64';
import { getPasswordStrength } from '../../../utils/showPasswordStrength';

interface UncontrolledFormProps {
  onClose: () => void;
}

export default function UncontrolledForm({ onClose }: UncontrolledFormProps) {
  const radioListData = [
    {
      id: 0,
      label: 'Man',
      value: 'man',
      name: 'gender' as const,
    },
    {
      id: 1,
      label: 'Woman',
      value: 'woman',
      name: 'gender' as const,
    },
  ];

  const countries = useForms(formsGetCountries);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [strength, setStrength] = useState('');

  const setData = useForms(formsSetData);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const password = formData.get('password');
    if (typeof password === 'string') {
      setStrength(getPasswordStrength(password));
    }

    const file = formData.get('file');
    const fileBase64 = file instanceof File ? await fileToBase64(file) : '';

    const data = {
      ...Object.fromEntries(formData.entries()),
      file: fileBase64,
      terms: formData.get('terms') === 'on',
    };

    try {
      const validatedData = await formSchema.validate(data, {
        abortEarly: false,
      });
      setErrors({});
      setData(validatedData);
      onClose();
    } catch (err) {
      if (err instanceof ValidationError) {
        const newErrors: FormDataErrors = {};
        err.inner.forEach((e) => {
          if (e.path) {
            newErrors[e.path as keyof FormDataErrors] = e.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col">
      <InputDefault
        id="name"
        name="name"
        label="Name"
        placeholder="Enter name"
        type="text"
        error={errors.name}
      />
      <InputDefault
        id="age"
        name="age"
        label="Age"
        placeholder="Enter age"
        type="number"
        error={errors.age}
      />
      <InputDefault
        id="email"
        name="email"
        label="Email"
        placeholder="Enter email"
        type="email"
        error={errors.email}
      />
      <InputDefault
        id="password"
        name="password"
        label="Password"
        placeholder="Enter password"
        type="password"
        error={errors.password}
        strength={strength}
      />
      <InputDefault
        id="repeatPassword"
        name="repeatPassword"
        label="Repeat Password"
        placeholder="Repeat password"
        type="password"
        error={errors.repeatPassword}
      />

      <RadioList data={radioListData} error={errors.gender} />
      <CheckboxDefault id="terms" label="Accept T&C" error={errors.terms} />
      <AddFile id="file" label="Add img" error={errors.file} />
      <DataList
        id="country"
        label="Country"
        listName="country-list"
        listOptions={countries}
        placeholder="Select country"
        error={errors.country}
      />

      <ButtonDefault>Submit</ButtonDefault>
    </form>
  );
}

import { useState, type FormEvent } from 'react';
import { formsSetData, useForms } from '../../../hooks/useForms';
import InputDefault from '../../UI/input/Default';
import { formSchema } from '../../../schemas/formSchema';
import RadioList from '../../UI/radio-list/Default';
import CheckboxDefault from '../../UI/checkbox/Default';
import AddFile from '../../UI/add-file/AddFile';
import DataList from '../../UI/datalist/Default';
import { countries } from '../../../data/countries';
import ButtonDefault from '../../UI/button/Default';
import type { FormDataErrors } from '../../../types';

export default function UncontrolledForm() {
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const setData = useForms(formsSetData);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file');
    const data = {
      ...Object.fromEntries(formData.entries()),
      file,
    };

    const result = formSchema.safeParse(data);

    if (!result.success) {
      const newErrors: FormDataErrors = {};

      result.error.issues.forEach((err) => {
        newErrors[err.path[0] as keyof FormDataErrors] = err.message;
      });
      setErrors(newErrors);
    } else {
      setData(result.data);
    }
  };

  return (
    <form onSubmit={submitForm}>
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

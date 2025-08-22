import { type FormEvent } from 'react';
import { formsSetData, useForms } from '../../../hooks/useForms';
import InputDefault from '../../UI/input/Default';
import { formSchema } from '../../../schemas/formSchema';
import RadioList from '../../UI/radio-list/Default';
import CheckboxDefault from '../../UI/checkbox/Default';
import AddFile from '../../UI/add-file/AddFile';
import DataList from '../../UI/datalist/Default';
import { countries } from '../../../data/countries';
import ButtonDefault from '../../UI/button/Default';

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

  const setData = useForms(formsSetData);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const result = formSchema.parse(data);
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col gap-4">
      <InputDefault
        id="name"
        name="name"
        label="Name"
        placeholder="Enter name"
        type="text"
      />
      <InputDefault
        id="age"
        name="age"
        label="Age"
        placeholder="Enter age"
        type="number"
      />
      <InputDefault
        id="email"
        name="email"
        label="Email"
        placeholder="Enter email"
        type="email"
      />
      <InputDefault
        id="password"
        name="password"
        label="Password"
        placeholder="Enter password"
        type="password"
      />
      <InputDefault
        id="repeatPassword"
        name="repeatPassword"
        label="Repeat Password"
        placeholder="Repeat password"
        type="password"
      />

      <RadioList data={radioListData} />
      <CheckboxDefault id="terms" label="Accept T&C" />
      <AddFile id="file" label="Add img" />
      <DataList
        id="country"
        label="Country"
        listName="country-list"
        listOptions={countries}
        placeholder="Select country"
      />

      <ButtonDefault>Submit</ButtonDefault>
    </form>
  );
}

import { useForm } from 'react-hook-form';
// import { formsSetData, useForms } from '../../../hooks/useForms';
import type { FormData } from '../../../types';
import InputDefault from '../../UI/input/Default';
import RadioList from '../../UI/radio-list/Default';
import CheckboxDefault from '../../UI/checkbox/Default';
import AddFile from '../../UI/add-file/AddFile';
import DataList from '../../UI/datalist/Default';
import { countries } from '../../../data/countries';
import ButtonDefault from '../../UI/button/Default';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../../schemas/formSchema';

export default function HookForm() {
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

  // const setData = useForms(formsSetData);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    const formData = {
      name: data.name,
      age: data.age,
      email: data.email,
      password: data.password,
      repeatPassword: data.repeatPassword,
      gender: data.gender,
      terms: data.terms,
      file: null,
      country: data.country,
    };

    console.log(formData);
    // setData(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <InputDefault
          id="name"
          label="Name"
          placeholder="Enter name"
          type="text"
          register={register}
          error={errors.name?.message}
        />
        <InputDefault
          id="age"
          label="Age"
          placeholder="Enter age"
          type="number"
          register={register}
          error={errors.age?.message}
        />
        <InputDefault
          id="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <InputDefault
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <InputDefault
          id="repeatPassword"
          label="Repeat Password"
          placeholder="Repeat password"
          type="password"
          register={register}
          error={errors.repeatPassword?.message}
        />

        <RadioList
          data={radioListData}
          register={register}
          error={errors.gender?.message}
        />
        <CheckboxDefault
          id="terms"
          label="Accept T&C"
          register={register}
          error={errors.terms?.message}
        />
        <AddFile
          id="file"
          label="Add img"
          register={register}
          error={errors.file?.message}
        />
        <DataList
          id="country"
          label="Country"
          listName="country-list"
          listOptions={countries}
          register={register}
          placeholder="Select country"
          error={errors.country?.message}
        />

        <ButtonDefault disabled={!isValid}>Submit</ButtonDefault>
      </form>
    </>
  );
}

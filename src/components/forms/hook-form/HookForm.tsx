import { useForm } from 'react-hook-form';
// import { formsSetData, useForms } from '../../../hooks/useForms';
import type { FormData } from '../../../types';
import InputDefault from '../../UI/input/Default';
import RadioList from '../../UI/radio-list/Default';
import CheckboxDefault from '../../UI/checkbox/Default';

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
  const { register, handleSubmit } = useForm<FormData>();

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
      <h1>Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputDefault
          id="name"
          label="Name"
          placeholder="Enter name"
          type="text"
          register={register}
        />
        <InputDefault
          id="age"
          label="Age"
          placeholder="Enter age"
          type="number"
          register={register}
        />
        <InputDefault
          id="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          register={register}
        />
        <InputDefault
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          register={register}
        />
        <InputDefault
          id="repeatPassword"
          label="Repeat Password"
          placeholder="Repeat password"
          type="password"
          register={register}
        />

        <RadioList data={radioListData} {...register('gender')} />
        <CheckboxDefault id="terms" label="Accept T&C" register={register} />

        <div>
          <label htmlFor="file">Add file: </label>
          <input id="file" type="file" {...register('file')} />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            className="text-black"
            list="country-list"
            id="country"
            {...register('country')}
          />
          <datalist id="country-list">
            <option value="USA" />
            <option value="Canada" />
            <option value="UK" />
            <option value="Australia" />
          </datalist>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

import { useForm } from 'react-hook-form';
import { formsSetData, useForms } from '../../../hooks/useForms';
import type { FormData } from '../../../types';

export default function HookForm() {
  const setData = useForms(formsSetData);
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

    setData(formData);
  };

  return (
    <>
      <h1>Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            className="text-black"
            type="text"
            placeholder="Enter name"
            {...register('name')}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            className="text-black"
            type="number"
            placeholder="Enter age"
            {...register('age')}
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            className="text-black"
            type="email"
            placeholder="Enter email"
            {...register('email')}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            className="text-black"
            type="password"
            placeholder="Enter password"
            {...register('password')}
          />
        </div>
        <div>
          <label htmlFor="repeat-password">Repeat Password: </label>
          <input
            id="repeat-password"
            className="text-black"
            type="password"
            placeholder="Repeat password"
            {...register('repeatPassword')}
          />
        </div>

        <div>
          <label htmlFor="man">Man</label>
          <input type="radio" id="man" value="man" {...register('gender')} />

          <label htmlFor="woman">Woman</label>
          <input
            type="radio"
            id="woman"
            value="woman"
            {...register('gender')}
          />
        </div>

        <div>
          <input type="checkbox" id="terms" {...register('terms')} />
          <label htmlFor="terms">Accept T&C</label>
        </div>

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

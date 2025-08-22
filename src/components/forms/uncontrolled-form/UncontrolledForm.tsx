import { type FormEvent } from 'react';
import { formsSetData, useForms } from '../../../hooks/useForms';
import InputDefault from '../../UI/Input/Default';
import { formSchema } from '../../../schemas/formSchema';

export default function UncontrolledForm() {
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
    <form onSubmit={submitForm}>
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

      <div>
        <label htmlFor="man">Man</label>
        <input type="radio" id="man" name="gender" value="man" />

        <label htmlFor="woman">Woman</label>
        <input type="radio" id="woman" name="gender" value="woman" />
      </div>

      <div>
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms">Accept T&C</label>
      </div>

      <div>
        <label htmlFor="file">Add img: </label>
        <input id="file" type="file" />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          className="text-black"
          list="country-list"
          id="country"
          name="country"
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
  );
}

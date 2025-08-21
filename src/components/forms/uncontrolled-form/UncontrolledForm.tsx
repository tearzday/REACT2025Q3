import { useRef, type FormEvent } from 'react';
import { formsSetData, useForms } from '../../../hooks/useForms';
import InputDefault from '../../UI/Input/Default';

export default function UncontrolledForm() {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const repeatPassword = useRef<HTMLInputElement>(null);
  const genderMan = useRef<HTMLInputElement>(null);
  const genderWoman = useRef<HTMLInputElement>(null);
  const terms = useRef<HTMLInputElement>(null);
  const file = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

  const setData = useForms(formsSetData);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const nameCurrent = name.current;
    const ageCurrent = age.current;
    const emailCurrent = email.current;
    const passwordCurrent = password.current;
    const repeatPasswordCurrent = repeatPassword.current;
    const genderCurrent = genderMan.current;
    const termsCurrent = terms.current;
    const fileCurrent = file.current;
    const countryCurrent = country.current;

    if (nameCurrent) {
      console.log(nameCurrent.value);
    }

    if (
      nameCurrent &&
      ageCurrent &&
      emailCurrent &&
      passwordCurrent &&
      repeatPasswordCurrent &&
      genderCurrent &&
      termsCurrent &&
      fileCurrent &&
      countryCurrent
    ) {
      const formData = {
        name: nameCurrent.value,
        age: ageCurrent.value,
        email: emailCurrent.value,
        password: passwordCurrent.value,
        repeatPassword: repeatPasswordCurrent.value,
        gender: genderCurrent.checked ? 'man' : 'woman',
        terms: termsCurrent.checked,
        file: null,
        country: countryCurrent.value,
      };

      setData(formData);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <InputDefault
        id="name"
        label="Name"
        placeholder="Enter name"
        type="text"
        ref={name}
      />
      <InputDefault
        id="age"
        label="Age"
        placeholder="Enter age"
        type="number"
        ref={age}
      />
      <InputDefault
        id="email"
        label="Email"
        placeholder="Enter email"
        type="email"
        ref={email}
      />
      <InputDefault
        id="password"
        label="Password"
        placeholder="Enter password"
        type="password"
        ref={password}
      />
      <InputDefault
        id="repeatPassword"
        label="Repeat Password"
        placeholder="Repeat password"
        type="password"
        ref={repeatPassword}
      />

      <div>
        <label htmlFor="man">Man</label>
        <input
          type="radio"
          id="man"
          name="gender"
          value="man"
          ref={genderMan}
        />

        <label htmlFor="woman">Woman</label>
        <input
          type="radio"
          id="woman"
          name="gender"
          value="woman"
          ref={genderWoman}
        />
      </div>

      <div>
        <input type="checkbox" id="terms" name="terms" ref={terms} />
        <label htmlFor="terms">Accept T&C</label>
      </div>

      <div>
        <label htmlFor="file">Add file: </label>
        <input id="file" type="file" ref={file} />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          className="text-black"
          list="country-list"
          id="country"
          ref={country}
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

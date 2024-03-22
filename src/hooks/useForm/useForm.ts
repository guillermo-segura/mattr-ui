import { useState } from 'react';
import axios from 'axios';

interface Values {
  givenName: string;
  email: string;
  country: string;
  birthdate: string;
  photo: string;
};

export interface UseForm {
  values: Values;
  setGivenName: (value: string) => void,
  setEmail: (value: string) => void,
  setCountry: (value: string) => void,
  setBirthdate: (value: string) => void,
  setPhoto: (value: string) => void,
  submitValues: () => void;
}

const useForm = (): UseForm => {
  const [givenName, setGivenName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [photo, setPhoto] = useState('');

  const values = {
    givenName,
    email,
    country,
    birthdate,
    photo,
  };

  const submitValues = () => {
    console.log('Values submitted', values);
    axios.post('http://localhost:3001/api/issue-credential', {
      givenName: '',
      email: '',
      countryOfResidence: '',
      dateOfBirth: '',
      photo: '',
    });
  };

  return {
    values,
    setGivenName,
    setEmail,
    setCountry,
    setBirthdate,
    setPhoto,
    submitValues,
  };
};

export default useForm;

import { useState } from 'react';
import mattrApi from '../../api/mattr';

interface Values {
  givenName: string;
  email: string;
  countryOfResidence: string;
  dateOfBirth: string;
  photo: string;
};

export interface UseForm {
  values: Values;
  setGivenName: (value: string) => void,
  setEmail: (value: string) => void,
  setCountryOfResidence: (value: string) => void,
  setDateOfBirth: (value: string) => void,
  setPhoto: (value: string) => void,
  submitValues: () => void;
}

const useForm = (): UseForm => {
  const [givenName, setGivenName] = useState('');
  const [email, setEmail] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [photo, setPhoto] = useState('');

  const values = {
    givenName,
    email,
    countryOfResidence,
    dateOfBirth,
    photo,
  };

  const submitValues = () => {
    console.log('Values submitted', values);
    mattrApi.post('/api/issue-credential', values);
  };

  return {
    values,
    setGivenName,
    setEmail,
    setCountryOfResidence,
    setDateOfBirth,
    setPhoto,
    submitValues,
  };
};

export default useForm;

import { useState } from 'react';

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

  return {
    values,
    setGivenName,
    setEmail,
    setCountry,
    setBirthdate,
    setPhoto,
  };
};

export default useForm;

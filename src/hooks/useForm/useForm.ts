import { useState } from 'react';
import mattrApi from '../../api/mattr';

// THIS SHOULD BE COMING FROM LOCALSTORAGE OR OTHER SOURCE
const WALLET_DID = 'did:key:z6MkqW5J8VadfM7bYWKAtMrVrZ1JnsuEnPvPiTqmFV3ecVz7';

interface Values {
  givenName: string;
  email: string;
  countryOfResidence: string;
  dateOfBirth: string;
  photo: string;
};

export interface UseForm {
  values: Values;
  isSubmitting: boolean;
  isCompleted: boolean;
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const values = {
    givenName,
    email,
    countryOfResidence,
    dateOfBirth,
    photo,
  };

  const submitValues = () => {
    setIsSubmitting(true);
    mattrApi.post('/api/issue-credential', { ...values, walletDid: WALLET_DID }).finally(() => {
      setIsSubmitting(false);
    });
  };

  const isCompleted = Object.values(values).every((value) => !!value);

  return {
    values,
    isSubmitting,
    isCompleted,
    setGivenName,
    setEmail,
    setCountryOfResidence,
    setDateOfBirth,
    setPhoto,
    submitValues,
  };
};

export default useForm;
